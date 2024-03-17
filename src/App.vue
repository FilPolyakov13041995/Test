<template>
  <div id="app" class="font-commissioner">
    <div class="wrapper flex min-h-screen">
      <!-- Навигационный блок -->
      <NavigationVue />
      <div class="flex-1 bg-main">
        <!-- Контент Header -->
        <HeaderVue />
        <!-- Основной контент страницы -->
        <main>
          <TeamInfoVue />
          <ButtonVue />
          <TeamTableVue />
        </main>
        <footer></footer>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonVue from "./components/Button.vue";
import HeaderVue from "./components/Header.vue";
import TeamInfoVue from "./components/TeamInfo.vue";
import TeamTableVue from "./components/TeamTable.vue";
import NavigationVue from "./components/Navigation.vue";

export default {
  name: "App",
  components: {
    NavigationVue,
    HeaderVue,
    TeamInfoVue,
    ButtonVue,
    TeamTableVue,
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

