<template>
  <div id="app">
    <div class="wrapper flex h-screen">
      <SidebarVue />
      <div class="main flex-1 bg-main">
        <!-- Контент заголовка -->
        <HeaderVue class="px-7" />
        <!-- Основной контент страницы -->
      </div>
    </div>
  </div>
</template>

<script>
import HeaderVue from "./components/Header.vue";
import SidebarVue from "./components/Sidebar.vue";


export default {
  name: "App",
  components: {
    SidebarVue,
    HeaderVue,
  },

  data() {
    return {
      message: "Привет, Vue!",
      date: new Date(),
    };
  },
  computed: {
    timeNow() {
      return this.date.toLocaleTimeString();
    },
  },
};
</script>

<style scoped></style>
