<script lang="ts" setup>
import type Swiper from "swiper";
import { ref, onMounted } from 'vue'
const props = defineProps<{
  firstSwiper: Swiper | null,
  modelValue,
  index,
  isOpened: boolean
}>()

const scrollbar = ref(null)

const emit = defineEmits<{
  (e: 'update:modelValue', el): void
}>()

onMounted(() => {
  emit('update:modelValue', scrollbar.value)
})

onUpdated(() => {
  // console.log("upd props footer", props.firstSwiper)
  // console.log("upd scr footer", scrollbar)
})
</script>

<template>
  <footer class="footer py-[30px] mb-[41px] relative transition-all duration-300" :class="isOpened ? 'justify-center' : ''">
    <ul
      class="social flex gap-[35px] mr-5"
      :class="isOpened ? 'z-20' : ''"
    >
      <li><a href="#" target="_black">Facebook</a></li>
      <li><a href="#" target="_black">Vkontakte</a></li>
      <li><a href="#" target="_black">Behance</a></li>
    </ul>
    <div v-show="!isOpened" class="sl-nav flex-grow max-w-[313px] w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div class="arrows flex items-center">
        <button class="swiper-button--prev"
                @click="firstSwiper?.slidePrev()"
        >
          <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 1L1.5 6L6.5 11" stroke="black" stroke-width="2"/>
          </svg>
        </button>
        <div>0{{index}}</div>
        <div class="flex-grow h-px bg-[#425A2061]" ref="scrollbar"></div>
        <div>0{{firstSwiper?.slides.length || 1}}</div>
        <button class="swiper-button--next"
                @click="firstSwiper?.slideNext()"
        >
          <svg class="rotate-180" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 1L1.5 6L6.5 11" stroke="black" stroke-width="2"/>
          </svg>
        </button>
      </div>
    </div>
  </footer>
</template>

<style lang="postcss">
  .footer {
    font-family: 'FuturaDemiC', sans-serif;
    @apply bg-transparent flex text-gray-dark;
  }
</style>