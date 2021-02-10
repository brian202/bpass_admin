import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const resourceHost = "http://localhost:3000"

//////////////////// 
// 화면을 갱신할때 이 로컬 스토리지에 저장된 토큰을 axios 헤더에 설정하는 로직
const enhanceAccessToeken = () => {
  const { accessToken } = localStorage
  if (!accessToken) return
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`
}
enhanceAccessToeken()
////////////////////

const LoginStore = new Vuex.Store({
  state: {
    accessToken: null
  },
  getters: {
    isAuthenticated (state) {
      state.accessToken = state.accessToken || localStorage.accessToken
      return state.accessToken
    }
  },
  mutations: {
    // LOGIN mutatios는 LOGIN토큰값을 스토어에 저장함과 동시에 로컬스토리지에 accessToken이란 키에도 추가로 저장
    LOGIN(state, { accessToken }) {
      // 스토어에 액세스 토큰 저장
      state.accessToken = accessToken

      // 토큰을 로컬 스토리지에 저장
      localStorage.accessToken = accessToken
    },

    // LOGOUT mutations는 스토어에 저장된 accessToken 값을 초기화하고 로컬스토리지 값을 삭제한다.
    LOGOUT(state) {
      // 토큰 정보 삭제
      state.accessToken = null
      delete localStorage.accessToken
    },
  },
  actions: {
    LOGIN({ commit }, {email, password}) {
      return axios
      .post(`${resourceHost}/login`, { email, password })
      .then(({ data }) => {
        // Login 변이 실행
        commit("LOGIN", data)

        // 모든 HTTP 요청 헤더에 Authorization 을 추가한다.
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
      })
    },

    // LOGOUT Action은 axios 헤더 값을 초기화하여 이후 API 요청에는 토큰 정보를 포함하지 않도록 구성
    LOGOUT({ commit }) {
      // HTTP 요청 헤더값 제거
      axios.defaults.headers.common['Authorization'] = undefined

      commit("LOGOUT")
    },
  },
  modules: {
  }
})

export default LoginStore