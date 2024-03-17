<template>
  <div id="app" class="font-commissioner">
    <div class="wrapper flex h-screen">
      <SidebarVue />
      <div class="main flex-1 bg-main">
        <!-- Контент заголовка -->
        <HeaderVue />
        <!-- Основной контент страницы -->
        <TeamInfoVue />
        <ButtonVue />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonVue from './components/Button.vue';
import HeaderVue from "./components/Header.vue";
import SidebarVue from "./components/Sidebar.vue";
import TeamInfoVue from './components/TeamInfo.vue';


export default {
  name: "App",
  components: {
    SidebarVue,
    HeaderVue,
    TeamInfoVue,
    ButtonVue,
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
