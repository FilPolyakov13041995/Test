<template>
  <div
    class="sidebar w-18 bg-white flex flex-col justify-between items-center pt-7"
  >
    <div>
      <LogoVue class="mb-10" />
      <MenuListSvgsVue />
    </div>
    <div>
      <div class="border-y border-slate-300 w-full"></div>
      <PlusVue class="mx-auto" />
    </div>
  </div>
</template>

<script>
import LogoVue from "./icons/Logo.vue";
import MenuListSvgsVue from "./icons/MenuListSvgs.vue";
import PlusVue from "./icons/Plus.vue";

export default {
  name: "SideBar",
  components: {
    LogoVue,
    MenuListSvgsVue,
    PlusVue,
  },
};
</script>
