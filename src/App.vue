<template>
  <div id="app">
    <div class="wrapper flex h-screen">
      <SidebarVue />
      <div class="main flex-1 bg-main">
        <!-- Контент заголовка -->
        <HeaderVue class="mb-7" />
        <!-- Основной контент страницы -->
        <TeamInfoVue />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderVue from "./components/Header.vue";
import SidebarVue from "./components/Sidebar.vue";
import TeamInfoVue from './components/TeamInfo.vue';


export default {
  name: "App",
  components: {
    SidebarVue,
    HeaderVue,
    TeamInfoVue,
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
