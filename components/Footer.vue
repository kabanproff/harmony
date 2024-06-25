<script lang="ts" setup>
// const carousel = props
// console.log(swiper)
import type Swiper from "swiper";
const props = defineProps<{firstSwiper: Swiper | null}>()
console.log(props)
</script>

<template>
  <footer class="footer py-[30px] mb-[41px]">
    <ul class="social flex gap-[35px] mr-5">
      <li><a href="#" target="_black">Facebook</a></li>
      <li><a href="#" target="_black">Vkontakte</a></li>
      <li><a href="#" target="_black">Behance</a></li>
    </ul>
    <div class="sl-nav">
      <div class="arrows">
        <button class="swiper-button--prev"
                @click="firstSwiper?.slidePrev()"
        >
          Prev
        </button>
        <button class="swiper-button--next"
                @click="firstSwiper?.slideNext()"
        >
          Next
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