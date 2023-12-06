<script setup>
import { ref } from 'vue'
const movieTitle = 'Move Title'
const readMore = ref(false)
const description = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis optio blanditiis fugiat
      quae rerum iste aspernatur Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis optio blanditiis fugiat
      quae rerum iste aspernatur`

function toggle() {
  readMore.value = !readMore.value
}
</script>

<template>
  <article class="border-2 p-8 rounded-xl">
    <h2 class="my-4 text-lg">{{ movieTitle }}</h2>
    <p>
      {{ readMore ? description : `${description.substring(0, 200)}...` }}
      <button @click="toggle" class="block text-center my-4">
        {{ readMore ? 'Show less' : 'Read More' }}
      </button>
    </p>
  </article>
</template>
