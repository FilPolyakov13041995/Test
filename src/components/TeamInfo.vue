<template>
  <div class="mx-7 bg-white rounded-xl px-7 py-4 flex items-center mb-7 gap-9">
    <div class="flex items-center gap-4">
      <TeamIconVue class="p-2" />
      <div class="relative">
        <h3 class="text-sm font-medium text-blue-custom">
          Team
          <span class="absolute top-0 left-10"><InfoVue /></span>
        </h3>
      </div>
    </div>
    <div class="ml-12 text-blue-custom">
      <p class="text-2xl font-medium">130</p>
      <p class="text-gray-400 text-xs">members</p>
    </div>
    <div class="border-x border-slate-200 h-12"></div>
    <div class="relative text-blue-custom">
      <p class="text-2xl font-medium">36</p>
      <span
        class="bg-green-500 w-2 h-2 absolute top-1 left-8 rounded-full"
      ></span>
      <p class="text-gray-400 text-xs">online</p>
    </div>
    <div class="border-x border-slate-200 h-12"></div>
    <div class="text-blue-custom flex gap-9">
      <div>
        <p class="text-2xl font-medium">50</p>
        <p class="text-gray-400 text-xs">men</p>
      </div>
      <div>
        <p class="text-2xl font-medium">80</p>
        <p class="text-gray-400 text-xs">women</p>
      </div>
    </div>
    <div class="border-x border-slate-200 h-12"></div>
    <div class="text-blue-custom">
      <p class="text-2xl font-medium">29</p>
      <p class="text-gray-400 text-xs">average age</p>
    </div>
    <div class="border-x border-slate-200 h-12"></div>
    <div class="text-blue-custom">
      <p class="text-2xl font-medium">265</p>
      <p class="text-gray-400 text-xs">days work on average</p>
    </div>
    <div class="border-x border-slate-200 h-12"></div>
    <div class="text-blue-custom">
      <p class="text-2xl font-medium">36</p>
      <p class="text-gray-400 text-xs">days work newest employee</p>
    </div>
    <div class="border-x border-slate-200 h-12"></div>
    <div class="text-blue-custom">
      <p class="text-2xl font-medium">1256</p>
      <p class="text-gray-400 text-xs">days work oldest employee</p>
    </div>
  </div>
</template>

<script>
import InfoVue from "./icons/Info.vue";
import TeamIconVue from "./icons/TeamIcon.vue";

export default {
  name: "TeamInfoVue",
  components: {
    TeamIconVue,
    InfoVue,
  },
};
</script>
