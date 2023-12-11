<script setup>
import FooterGlobal from './components/global/FooterGlobal.vue'
import HeaderGlobal from './components/global/HeaderGlobal.vue'
</script>

<template>
  <HeaderGlobal />
  <main class="bg-neutral-800 flex justify-center py-8">
    <router-view></router-view>
  </main>
  <FooterGlobal />
</template>
