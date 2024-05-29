<script lang="ts" setup>
  console.log('loaded');
</script>

<template>
  <section class="grid">
    <Header/>
    <div>
      <slot />
    </div>
    Footer
  </section>
</template>

<style scoped>
/*.grid {*/
/*  display: grid;*/
  /*grid-template-columns: 1fr 6fr;*/
  /*min-height: 100vh;*/
/*}*/
</style>