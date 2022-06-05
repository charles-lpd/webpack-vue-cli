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
      <transition name="router-fade" mode="out-in">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const title = ref('VUE-CLI-test')
</script>
<style>
.title {
  color: pink;
}
</style>
