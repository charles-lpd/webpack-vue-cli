<template>
  <div>
    <h1 class="title">
      {{ title }}
    </h1>
    <router-link to="/" class="text-3xl">
      home
    </router-link>
    <router-link to="/about" class="text-3xl">
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
import { ref } from 'vue'
const title = ref('VUE-CLI')
</script>
<style>
.title {
  color: pink;
}
</style>
