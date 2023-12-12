<script setup>
import SearchBar from './navigation/SearchBar.vue'
</script>
<template>
  <header
    class="bg-neutral-600 text-center text-white py-8 text-xl shadow-[0_5px_10px_rgba(64,64,64,0.6)]"
  >
    <navbar class="flex justify-evenly items-center"
      ><router-link :to="{ name: 'HomePage' }">
        <h2 class="text-2xl font-semibold">Fontaine Films</h2>
      </router-link>
      <SearchBar />
    </navbar>
  </header>
</template>

<script>
export default {
  name: 'HeaderGlobal'
}
</script>
