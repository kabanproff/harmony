<script lang="ts" setup>
import { watch } from "vue";

const firstSwiper = ref(null);
const secondSwiper = ref(null);
const scrollBar = ref(null);
const isOpened = ref(false);
const index = ref(1);

console.log('firstSwiper', firstSwiper)
onUpdated(() => {
  // console.log("upd firstSwiper", firstSwiper)
  // console.log("upd secondSwiper", secondSwiper)
  // console.log('upd scrollBar',scrollBar)
})
const handlerMenuOpen = () => {
  console.log('cl')
    isOpened.value = !isOpened.value;
  console.log(isOpened.value)
};

watch(
  () => firstSwiper.value,
  () => {
    firstSwiper.value?.on('realIndexChange', (e) => {
      index.value = e.realIndex + 1;
    })
  }
)

</script>

<template>
  <section class="container grid grid-rows-layout h-screen">
    <Header :isOpened="isOpened" @handlerMenuOpen="handlerMenuOpen"/>
    <FirstSwiperCarusel
      v-model="firstSwiper"
      :secondSwiper="secondSwiper"
      :scrollBar="scrollBar"
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
      v-model="scrollBar"
      :index="index"
      :isOpened="isOpened"
    />
  </section>
</template>