<template>
  <div>
    <sidebar-menu :menu="menu">
      <span slot="toggle-icon"><i class="fa fa-arrows-h" aria-hidden="true"></i></span>
      <span slot="dropdown-icon"><i class="fa fa-sort-desc" aria-hidden="true"></i></span>
    </sidebar-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { SidebarMenu } from 'vue-sidebar-menu';

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
      icon: 'fa fa-user',
    },
    {
      href: '/notice',
      title: '공지사항',
      icon: 'fa fa-list-ul',
      child: [
        {
          href: '/notice/list',
          title: '공지사항 리스트',
          icon: 'fa fa-file-alt',
        },
        {
          href: '/notice/Write',
          title: '공지사항 등록',
          icon: 'fa fa-file-alt',
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

<style>

</style>