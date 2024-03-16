<template>
  <div class="sidebar w-18 bg-white flex flex-col items-center pt-7 gap-5">
    <LogoVue />
    
  </div>
</template>

<script>
import LogoVue from "./icons/Logo.vue";

export default {
  name: "SideBar",
  components: {
    LogoVue,
  },
};
</script>