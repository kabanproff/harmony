<script lang="ts" setup>
  const list = [
    {
      title: 'Concept studio',
      text: 'In our best design works, the Customer will find interiors in various styles, from strict modern minimalism to luxurious, richly decorated, from inexpensive, budgetary solutions to elite and unique.'
    },
    {
      title: 'Everyday i’m',
      text: 'In our best design works, the Customer will find interiors in various styles, from strict modern minimalism to luxurious, richly decorated, from inexpensive, budgetary solutions to elite and unique.'
    },
  ]
</script>
<template>
  <div class="flex mb-11">
    <div v-for="({title, text}, d) in list" :class="d%2 === 0 ? 'left-col' : 'right-col'">
      <div class="h3 text-[18px] text-green-dark w-1/2">
        {{ title }}
      </div>
      <div class="text text-[14px]">{{text}}
      </div>
    </div>
  </div>
</template>