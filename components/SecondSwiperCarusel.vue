<script lang="ts" setup>
import { Controller, Parallax } from "swiper/modules";
import type Swiper from "swiper";

defineProps<{ modelValue: object | null, firstSwiper: Swiper | null}>();
const emit = defineEmits<{
  (e: 'update:modelValue', sw: Swiper | null): void
}>()

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

</script>
<template>
  <div class="banner mb-[20px] px-[12px]">
    <Swiper
      :modules="[SwiperAutoplay, Controller, Parallax]"
      :controller="{control: firstSwiper}"
      :slides-per-view="1"
      :loop="true"
      :parallax="true"
      :touchRatio="0"
      @swiper="onSwiper"
      :watchSlidesProgress="true"

    >
      <SwiperSlide v-for='(slide,d) in arr' :key="slide + d">

        <div
          :data-swiper-parallax-opacity="0"
          class="h1 font-bold leading-tight font-playfair text-8xl text-green-dark overflow-visible"
        >{{ slide }}</div>
      </SwiperSlide>
    </Swiper>

  </div>
</template>