<script lang="ts" setup>
import { ref } from 'vue'
import FirstSwiperCarusel from "~/components/FirstSwiperCarusel.vue";

console.log('loaded');
const firstSwiper = ref(null);
const secondSwiper = ref(null);
// const sw = defineModel('carousel')
console.log('firstSwiper', firstSwiper)
onUpdated(() => {
  console.log("upd firstSwiper", firstSwiper)
  console.log("upd secondSwiper", secondSwiper)
})
</script>

<template>
  <section class="container grid grid-rows-layout h-screen">
    <Header/>
    <FirstSwiperCarusel
      v-model="firstSwiper"
      :secondSwiper="secondSwiper"
    />
    <div class="mt-auto overflow-hidden w-3/5 ">
      <SecondSwiperCarusel
        v-model="secondSwiper"
        :firstSwiper="firstSwiper"
      />
      <DescCols />

    </div>
    <Footer
      :firstSwiper="firstSwiper"
    />
  </section>
</template>