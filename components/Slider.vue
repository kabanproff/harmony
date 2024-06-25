<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css/core';
// export default defineComponent( {
//   components: {
//     Splide,
//     SplideSlide,
//   },
// } );/
</script>
<template>
  <div class="fixed size-full left-0 top-0 -z-10">
    <Splide
      :options="{ rewind: true, arrows: false, pagination: true }"
      aria-label="My Favorite Images"

    >
      <SplideSlide>
        <img class="h-screen w-screen object-cover" src="/public/images/first-slide.png" alt="Sample 1">
      </SplideSlide>
      <SplideSlide>
        <img class="h-screen w-screen object-cover" src="/public/images/second-slide.png" alt="Sample 2">
      </SplideSlide>
    </Splide>
  </div>

</template>