<template>
  <div>{{ home }}</div>
</template>

<script setup lang="ts">
import { ref, onActivated } from 'vue'
onActivated(()=>{
  console.log(1)
})
const home = ref('Home')
</script>

<style>
</style>