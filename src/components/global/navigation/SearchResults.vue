<script setup>
const { posts, updateOpen, clearSearch } = defineProps({
  posts: Object,
  updateOpen: Function,
  clearSearch: Function
})
</script>
<template>
  <div class="absolute bg-neutral-700 text-white rounded-b-lg border-2">
    <ul class="p-4 text-left">
      <li
        v-for="item in posts"
        :key="item.id"
        @click="
          () => {
            updateOpen(false), clearSearch()
          }
        "
        class="pb-2 hover:bg-neutral-500"
      >
        <router-link :to="{ name: 'MovieDetails', params: { id: item.id } }">
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SearchResults'
}
</script>
