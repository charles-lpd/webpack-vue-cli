<template>
  <div>{{ home }}</div>
  <Card v-model="num" />
  {{ num }}
</template>

<script setup lang="ts">
import { ref, onActivated } from 'vue'
import Card from '@/components/Card.vue'
const num = ref('未更新')
onActivated(()=>{
  console.log(1)
})
const home = ref('Home')
</script>

<style>
</style>