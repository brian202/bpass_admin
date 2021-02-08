<template>
  <li :class="{ 'is-active': isDropdownActive }">
    <component
      :is="componentIs"
      :to="itemTo"
      @click="menuClick"
      exact-active-class="is-active"
      :class="{ 'has-icon': item.icon }"
    >
      <b-icon
        v-if="item.icon"
        :icon="item.icon"
        :class="{ 'has-update-mark': item.updateMark }"
        custom-size="default"
      />
      <span v-if="item.label" :class="{ 'menu-item-label': item.icon }">{{
        item.label
      }}</span>
    </component>
    <nav
      v-if="item.menu && item.menu.length > 0 ? true : false"
      :menu="item.menu"
      :is-submenu-list="true"
    ></nav>
  </li>
</template>

<script>
export default {
  name: 'MenuItem',
  components: {
    nav: () => import('@/components/layouts/Nav.vue'),
  },
  data() {
    return {
      isDropdownActive: false,
    };
  },
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  methods: {
    menuClick() {
      this.$emit('menu-click', this.item);

      if (this.hasDropdown) {
        this.isDropdownActive = !this.isDropdownActive;
      }
    },
  },
  computed: {
    componentIs() {
      return this.item.to ? 'router-link' : 'a';
    },
    hasDropdown() {
      return !!this.item.menu;
    },
    itemTo() {
      return this.item.to ? this.item.to : null;
    },
  },
};
</script>

<style></style>a
