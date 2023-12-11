<script setup>
const { post, imgUrl } = defineProps({ post: Object, imgUrl: String })
</script>
<template>
  <section class="flex p-8 items-center max-w-screen-lg">
    <section class="p-4">
      <img class="max-w-xs" :src="imgUrl" />
    </section>
    <section class="text-white p-4 [&>p]:py-2 [&>p]:text-lg [&>p>span]:font-bold">
      <h2 class="text-2xl font-bold">{{ post.original_title }}</h2>
      <p>
        Release Date : <span>{{ post.release_date }}</span>
      </p>
      <p>
        Genres :
        <span
          class="after:content-[',_'] after:last:content-['']"
          v-for="genre in post.genres"
          :key="genre.id"
          >{{ genre.name }}</span
        >
      </p>
      <p>{{ post.overview }}</p>
      <p>
        Runtime : <span>{{ post.runtime }} minutes.</span>
      </p>
      <div class="flex justify-between [&>p>span]:font-bold">
        <p>
          Popularity : <span>{{ post.popularity }}</span>
        </p>
        <p>
          Rating : <span>{{ post.vote_average }}</span>
        </p>
        <p>
          Vote Count : <span>{{ post.vote_count }}</span>
        </p>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'MovieOverview'
}
</script>
