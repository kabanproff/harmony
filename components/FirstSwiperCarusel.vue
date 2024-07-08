<script lang="ts" setup>
import { Navigation, Pagination, EffectFade, Controller, Scrollbar } from "swiper/modules";
import type Swiper from "swiper";

const props = defineProps<{
  modelValue: object | null,
  secondSwiper: Swiper | null,
  scrollBar
}>();
const emit = defineEmits<{
  (e: 'update:modelValue', sw: Swiper | null): void
}>()
console.log('props fsw', props)

const arr = [
  '/images/first-slide.png',
  '/images/second-slide.png',
  '/images/first-slide.png',
  '/images/second-slide.png',
  '/images/first-slide.png',
  '/images/second-slide.png'
]
const onSwiper = (swiper) => {
  emit('update:modelValue', swiper)
};
import 'swiper/css/scrollbar';
onUpdated(() => {
  // console.log("upd props", props)
})

</script>
<template>
  <div class="sl-wrap fixed size-full left-0 top-0 -z-10">
    <Swiper
      :modules="[SwiperAutoplay, EffectFade, Navigation, Scrollbar, Pagination, Controller]"
      :controller="{control: secondSwiper}"
      :slides-per-view="1"
      :loop="true"
      @swiper="onSwiper"
      :effect="'fade'"
      :speed="1000"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: true,
      }"
      :scrollbar="{ el: scrollBar, draggable: true, hide: false }"
    >
      <SwiperSlide v-for='(slide,d) in arr' :key="slide + d">
        <NuxtImg class="h-screen w-screen object-cover" :src=slide alt="Sample 2"/>
      </SwiperSlide>
    </Swiper>
  </div>
</template>