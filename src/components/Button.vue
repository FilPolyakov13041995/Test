<template>
  <div class="mx-7 mb-7">
    <button
      class="flex items-center rounded-xl text-white bg-button-custom gap-4 px-4 py-3.5"
    >
      <PlusButtonVue />
      <p>Add new Employee</p>
    </button>
  </div>
</template>

<script>
import PlusButtonVue from "./icons/PlusButton.vue";
export default {
  name: "ButtonVue",
  components: {
    PlusButtonVue,
  },
};
</script>
