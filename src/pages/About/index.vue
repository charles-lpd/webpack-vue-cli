<template>
  <div>{{ about }}</div>
  <video
    width="500"
    height="500"
    controls
    autoplay
  >
    <source src="@/video/micro_plants_1.mp4" type="video/mp4" />
    您的浏览器不支持 HTML5 video 标签。
  </video>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const about = ref('About')
</script>

<style></style>
