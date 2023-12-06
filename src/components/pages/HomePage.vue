<script setup>
import CardHome from '../re/CardHome.vue'
const count = 6
</script>

<template>
  <section class="text-white grid grid-cols-3 gap-4 max-w-screen-lg">
    <CardHome v-for="n in count" :key="n" />
  </section>
</template>
