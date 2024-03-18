<template>
  <nav class="w-18 bg-white flex flex-col justify-between">
    <div class="flex flex-col">
      <LogoVue class="mb-10 mt-7 mx-auto" />
      <div v-for="tab in menuItems" :key="tab.id">
        <div class="relative">
          <div
            v-if="tab.id === activeTab"
            class="absolute left-0 top-3.5 w-1 h-6 mx-auto rounded-e-xl bg-button-custom"
          ></div>
          <p class="p-4">
            <img
              :src="require(`../assets/icons/${tab.svg}`)"
              class="w-5 h-5 mx-auto"
              alt="icons"
            />
          </p>
        </div>
      </div>
    </div>
    <div>
      <div class="border-y border-slate-100 w-full"></div>
      <PlusVue class="mx-auto" />
    </div>
  </nav>
</template>

<script>
import LogoVue from "./icons/Logo.vue";
import PlusVue from "./icons/Plus.vue";

export default {
  name: "NavigationVue",
  components: {
    LogoVue,
    PlusVue,
  },

  data() {
    return {
      activeTab: 9,
      menuItems: [
        {
          id: 1,
          name: "Tools",
          svg: "tools.svg",
        },
        {
          id: 2,
          name: "Rating",
          svg: "rating.svg",
        },
        {
          id: 3,
          name: "Wallet",
          svg: "wallet.svg",
        },
        {
          id: 4,
          name: "Clip",
          svg: "clip.svg",
        },
        {
          id: 5,
          name: "Note",
          svg: "note.svg",
        },
        {
          id: 6,
          name: "Dna",
          svg: "dna.svg",
        },
        {
          id: 7,
          name: "Settings",
          svg: "settings.svg",
        },
        {
          id: 8,
          name: "Graphics",
          svg: "graphics.svg",
        },
        {
          id: 9,
          name: "Users",
          svg: "users.svg",
        },
      ],
    };
  },
  methods: {},
};
</script>

