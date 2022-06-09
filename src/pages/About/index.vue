<template>
  <div>{{ about }}</div>
  <VideoVue video-src="micro_plants_1" @update-count="updateCountNum" />
  {{ count }}
  <ElButton type="primary">
    按钮
  </ElButton>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { ElButton } from 'element-plus'
import { useStore } from '@/store'
import VideoVue from '@/components/Video.vue'
const store = useStore()
const count = computed(()=>{
  return store.state.count
})
const about = ref('About')
const updateCountNum = (num:number) =>{
  store.dispatch('asyncUpdateCount', num)
}
</script>

<style></style>
