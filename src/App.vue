<template>
  <div>
    <h1 class="title">
      {{ title }} {{ count }}
    </h1>
    <router-link
      to="/"
      class="text-3xl"
    >
      home
    </router-link>
    <router-link to="/about/1" class="text-3xl">
      about
    </router-link>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { useStore } from './store'
const store = useStore()
const count = computed(() => {
  return store.state.count
})
const title = ref('VUE-CLI-test')
</script>
<style>
.title {
  color: pink;
}
</style>
