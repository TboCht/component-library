<template>
  <div class="swiper w-full">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide mx-[5px] cursor-pointer first:z-50 transition-all duration-500"
        v-for="filter in filters"
        :key="filter.value"
      >
        <transition-group tag="div" name="list" class="flex w-full">
          <FilterTictac
            :key="filter.value"
            :title="filter.label"
            :id="filter.value"
            @click="toggleMapFilter(filter)"
            :active="isFilterActive(filter)"
          />
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper } from "swiper";
import "swiper/css";
import { onMounted, ref } from "vue";
import FilterTictac from "../tags/FilterTictac.vue";

interface QuickMapFilter {
  value: string;
  label: string;
}

const selectedQuickFilter = ref<QuickMapFilter | null>(null);
const swiperRef = ref<Swiper>();

// Section filters

const toggleMapFilter = (filter: QuickMapFilter) => {
  if (selectedQuickFilter.value === filter) {
    selectedQuickFilter.value = null;
  } else {
    setQuickFilter(filter);
    swiperRef.value?.slideTo(0, 800);
  }
};

const isFilterActive = (filter: QuickMapFilter): boolean => {
  return selectedQuickFilter.value === filter;
};

const filters = ref<QuickMapFilter[]>([
  { value: "filter1", label: "filter 1" },
  { value: "filter2", label: "filter 2" },
  { value: "filter3", label: "filter 3" },
  { value: "filter4", label: "filter 4" },
  { value: "filter5", label: "filter 5" },
  { value: "filter6", label: "filter 6" },
  { value: "filter7", label: "filter 7" },
  { value: "filter8", label: "filter 8" },
  { value: "filter9", label: "filter 9" },
  { value: "filter10", label: "filter 10" },
]);

const setQuickFilter = (quickFilter: QuickMapFilter | null) => {
  // Set the selected quick filter
  selectedQuickFilter.value = quickFilter;
  // Change the order to put it in first place
  if (quickFilter)
    filters.value = [
      quickFilter,
      ...filters.value.filter((filter) => filter.value !== quickFilter.value),
    ];

  // Set the active filter
  if (quickFilter === null) {
    selectedQuickFilter.value = null;
  } else {
    selectedQuickFilter.value = quickFilter;
  }
};

onMounted(() => {
  swiperRef.value = new Swiper(".swiper", {
    speed: 500,
    slidesPerView: "auto",
  });
});
</script>

<style scoped>
.quick-map-filters {
  width: 100%;
}

/* slidesPerView: auto requires slides to have width: auto so they use content width */
.swiper-slide {
  width: auto !important;
}

/* Base transition for moving items */
.list-move {
  transition: transform 0.5s ease;
}
</style>
