<script setup>
const { post, imgUrl } = defineProps({ post: Object, imgUrl: String })
</script>
<template>
  <section class="text-white p-8" v-if="post && post.credits">
    <h2 class="text-2xl font-bold p-4">Cast :</h2>
    <section class="p-4 grid grid-cols-4 gap-2 text-center">
      <article v-for="actor in post.credits.cast.slice(0, 10)" :key="actor.id" class="text-center">
        <img :src="imgUrl + actor.profile_path" class="pb-2 mx-auto" />
        <p>{{ actor.original_name }}</p>
        <p>as</p>
        <p class="pb-4">{{ actor.character }}</p>
      </article>
    </section>
  </section>
</template>

<script>
export default {
  name: 'MovieCast'
}
</script>
