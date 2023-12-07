<script setup>
import { ref } from 'vue'

const readMore = ref(false)
const { movie } = defineProps({ movie: Object })

function toggle() {
  readMore.value = !readMore.value
}

const posterUrl = ref(``)
posterUrl.value = `https://image.tmdb.org/t/p/w342` + movie.poster_path
</script>

<template>
  <article class="border-2 p-8 rounded-xl bg-neutral-700">
    <img :src="posterUrl" />
    <h2 class="my-4 text-lg">{{ movie.original_title }}</h2>
    <p>
      {{ readMore ? movie.overview : `${movie.overview.substring(0, 200)}...` }}
      <button @click="toggle" class="block text-center my-4">
        {{ readMore ? 'Show less' : 'Read More' }}
      </button>
    </p>
  </article>
</template>
