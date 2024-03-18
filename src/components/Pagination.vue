<template>
  <div class="bg-white rounded-xl mx-7 mb-7 p-4 min-h-16 flex items-center">
    <div class="flex gap-4 items-center text-gray-custom">
      <ArrowLeftIcon />
      <p
        class="px-4 py-2"
        v-for="page in visiblePages"
        :key="page"
        :class="{
          'bg-slate-200 rounded-xl text-blue-custom': page === currentPage,
        }"
      >
        <a>{{ page }}</a>
      </p>
      <p v-if="showLastPageEllipsis">
        <a class="text-gray-custom">. . .</a>
      </p>
      <p v-if="currentPage < totalPages">
        <a class="px-4 py-2">{{ totalPages }}</a>
      </p>
      <ArrowRightIcon />
    </div>
  </div>
</template>

<script>
import ArrowLeftIcon from "./icons/ArrowLeft.vue";
import ArrowRightIcon from "./icons/ArrowRight.vue";
export default {
  name: "PaginationVue",
  components: {
    ArrowLeftIcon,
    ArrowRightIcon,
  },
  data() {
    return {
      visiblePages: [1, 2, 3],
      showLastPageEllipsis: true,
    };
  },
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  mounted() {
    this.updateVisiblePages();
  },
  watch: {
    currentPage() {
      this.updateVisiblePages();
    },
  },
  computed: {},
  methods: {
    updateVisiblePages() {
      const range = 1; 
      const startPage = Math.max(this.currentPage - range, 1);
      const endPage = Math.min(this.currentPage + range, this.totalPages);
      this.visiblePages = Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
      );
    },
  },
};
</script>