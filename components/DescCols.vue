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
      <div class="text text-[14px]">{{ text }}
      </div>
    </div>
  </div>
  <div class="flex p-2">
    <a href="#" class="btn btn-primary">Read More</a>
    <a href="#" class="btn group ml-5 relative pl-[25px] flex items-center">
      <svg class="group-hover:-rotate-12 absolute left-0 top-1/2 -translate-y-1/2 duration-300" width="16" height="18"
           viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.5 8.13398C16.1667 8.51888 16.1667 9.48113 15.5 9.86603L2 17.6603C1.33334 18.0452 0.500001 17.564 0.500001 16.7942L0.500002 1.20577C0.500002 0.435972 1.33333 -0.0451548 2 0.339746L15.5 8.13398Z"
          fill="#425A20"/>
      </svg>
      <svg class="-rotate-2 absolute left-0 top-[52%] -translate-y-1/2" width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.1787 5.56727C16.7243 5.75598 16.8611 6.46459 16.4248 6.84278L4.51779 17.1652C4.08155 17.5434 3.3995 17.3075 3.2901 16.7406L0.304156 1.26759C0.194759 0.700699 0.740062 0.227966 1.2857 0.416671L16.1787 5.56727Z" stroke="black" stroke-width="0.5"/>
      </svg>

      View project
    </a>
  </div>

</template>
<style lang="postcss" scoped>
.btn {
  @apply text-[18px] leading-[1.17] rounded-[5px] transition-all duration-200;
}

.btn-primary {
  @apply text-white pr-[56px] pt-[19px] pb-[18px] pl-[57px] relative inline-block;

  &::before {
    content: '';
    @apply transition-all duration-200 bg-green-light inline-block w-full h-full absolute left-0 top-0 rounded-[5px] -z-[1] hover:-rotate-2;
  }

  &::after {
    content: '';
    @apply transition-all duration-200 inline-block w-full h-full absolute left-0 top-0 rounded-[5px] z-[1] -rotate-2 border-black border;
  }
}
</style>