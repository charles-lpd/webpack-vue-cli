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
  {{ count }}
  <ElButton type="primary">
    按钮
  </ElButton>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { ElButton } from 'element-plus'
import { useStore } from '@/store'
const store = useStore()
const count = computed(()=>{
  return store.state.count
})
const about = ref('About')
const updateCountNum = () =>{
  store.dispatch('asyncUpdateCount', 11)
}
</script>

<style></style>
