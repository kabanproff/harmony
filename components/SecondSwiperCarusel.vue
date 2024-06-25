<script lang="ts" setup>
import {Controller } from "swiper/modules";
import type Swiper from "swiper";

const props = defineProps<{ modelValue: object | null, firstSwiper: Swiper | null}>();
const emit = defineEmits<{
  (e: 'update:modelValue', sw: Swiper | null): void
}>()
console.log('props', props)

const arr = [
  'Harmony',
  'Testing',
  'Harmony',
  'Testing',
  'Harmony',
  'Testing',
]
const onSwiper = (swiper) => {
  emit('update:modelValue', swiper)
};

onUpdated(() => {
  console.log("upd props", props)
})

</script>
<template>
  <div class="banner">
    <Swiper
      :modules="[SwiperAutoplay, Controller]"
      :controller="{control: firstSwiper}"
      :slides-per-view="1"
      :loop="true"
      @swiper="onSwiper"
    >
      <SwiperSlide v-for='(slide,d) in arr' :key="slide + d">
        <div class="h1 font-bold leading-tight font-playfair text-8xl text-green-dark overflow-visible">{{ slide }}</div>
      </SwiperSlide>
    </Swiper>

  </div>
</template>