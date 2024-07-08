<script lang="ts" setup>
enum Lang {
  ru = 'RUS',
  en = 'ENG'
}
const activeLang = ref(Lang.en);
const changeSwitchLang = lang => {
  activeLang.value = lang;
};

</script>

<template>
  <div class="lang space-x-[15px]">
    <button :class="activeLang === Lang.ru && 'active'" class="lang-btn" @click="changeSwitchLang(Lang.ru)">{{ Lang.ru }}</button>
    <button :class="activeLang === Lang.en && 'active'" class="lang-btn" @click="changeSwitchLang(Lang.en)">{{ Lang.en }}</button>
  </div>
</template>

<style lang="postcss">
.lang-btn {
  @apply rounded text-gray-light bg-transparent px-1.5 pt-[6px] pb-[3px] inline-block;
}

.lang-btn.active {
  @apply text-gray-dark mt-[-2px] bg-[#4A6424] bg-opacity-10;
}
</style>