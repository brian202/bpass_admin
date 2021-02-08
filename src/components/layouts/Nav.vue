<template>
  <div id="nav">
    <ul :class="{ 'menu-list': !isSubmenuList }">
      <menu-item
        v-for="(item, index) in menu"
        @menu-click="menuClick"
        :item="item"
        :key="index"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import MenuItem from '@/components/Menu/MenuItem.vue';
import { IMenu } from '@/types/menu.types';

@Component({
  components: {
    MenuItem,
  },
  props: {
    isSubmenuList: {
      type: Boolean,
      default: false,
    },
    menu: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    menuClick(item) {
      this.$emit('menu-click', item);
    },
  },
})
export default class Nav extends Vue {
  @Prop({ default: () => [] }) menu?: IMenu[];
}
</script>
