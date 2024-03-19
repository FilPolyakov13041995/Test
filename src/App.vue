<template>
  <div id="app" class="font-commissioner">
    <div class="wrapper flex min-h-screen">
      <!-- Навигационный блок -->
      <NavigationVue />
      <div class="flex-1 bg-main">
        <header>
          <!-- Контент Header -->
          <HeaderVue />
        </header>
        <main>
          <!-- Основной контент страницы -->
          <TeamInfoVue />
          <ButtonVue />
          <TeamTableVue />
        </main>
        <footer>
          <PaginationVue :currentPage="currentPage" :totalPages="totalPages" />
          <!-- Контент Footer -->
        </footer>
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
import PaginationVue from "./components/Pagination.vue";

export default {
  name: "App",
  components: {
    NavigationVue,
    HeaderVue,
    TeamInfoVue,
    ButtonVue,
    TeamTableVue,
    PaginationVue,
  },
  data() {
    return {
      currentPage: 2,
      totalPages: 12,
    };
  },
};
</script>

