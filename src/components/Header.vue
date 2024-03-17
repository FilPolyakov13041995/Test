<template>
  <header
    class="header flex items-center justify-between h-19 bg-gradient-to-l px-7 mb-7 from-white to-slate-50"
  >
    <div class="flex items-center gap-7">
      <div class="flex flex-col gap-1 cursor-pointer">
        <div class="border border-blue-custom w-4 rounded-lg"></div>
        <div class="border border-blue-custom w-4 rounded-lg"></div>
        <div class="border border-blue-custom w-4 rounded-lg"></div>
      </div>
      <h1 class="text-1xl text-blue-custom font-medium">Team</h1>
    </div>
    <div class="flex items-center gap-3 sm:gap-7">
      <SearchVue />
      <NotificationsVue />
      <div class="border-x border-slate-300 h-8"></div>
      <div class="flex items-center gap-3">
        <img src="../assets/images/Ernest.png" alt="Ernest" class="w-8 h-8 rounded-lg">
        <h3 class="text-blue-custom text-sm font-normal">Ernest Eberly</h3>
        <ArrowDownVue /> 
      </div>
    </div>
  </header>
</template>

<script>
import ArrowDownVue from './icons/ArrowDown.vue';
import NotificationsVue from './icons/Notifications.vue';
import SearchVue from './icons/Search.vue';
export default {
  name: "HeaderVue",
  components: {
    SearchVue,
    NotificationsVue,
    ArrowDownVue,
  }
};

</script>

