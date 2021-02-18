<template>
  <sidebar-menu :menu="menu">
    <span slot="toggle-icon"><i class="fa fa-arrows-h" aria-hidden="true"></i></span>
    <span slot="dropdown-icon"
      ><i class="fa fa-sort-desc" aria-hidden="true"></i
    ></span>
  </sidebar-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SidebarMenu from '@/components/Nav/SidebarMenu.vue';

@Component({
  components: {
    SidebarMenu,
  },
})
export default class extends Vue {
  menu = [
    {
      href: '/',
      title: 'Dashboard',
      icon: 'fa fa-bar-chart',
    },
    {
      title: '공지사항',
      icon: 'fa fa-bell-o',
      child: [
        {
          href: '/notice/list',
          title: '공지사항 리스트',
          icon: 'fa fa-list-ul',
        },
        {
          href: '/notice/write',
          title: '공지사항 등록',
          icon: 'fa fa-pencil',
        },
      ],
    },
    {
      href: '/push',
      title: '푸시',
      icon: 'fa fa-paper-plane',
    },
  ];
}
</script>
