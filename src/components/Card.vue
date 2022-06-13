<template>
  <div />
  <button @click="update">
    点击触发
  </button>
  {{ modelValue }}
</template>

<script setup lang='ts'>
interface Props {
  modelValue: string
}
interface Emits {
  (e:'update:modelValue', str: string): void
}
defineProps<Props>()
const emits = defineEmits<Emits>()
const update = () => {
  console.log(123)
  emits('update:modelValue', '更新成功')
}
</script>

<style>

</style>