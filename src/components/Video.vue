<template>
  <video
    :width="width"
    :height="height"
    controls
  >
    <source :src="require(`@/video/${videoSrc}.mp4`)" type="video/mp4" />
  </video>
  <button @click="clickUpdateCount">
    变成一百
  </button>
  <img src="../video/winton.png">
</template>

<script setup lang='ts'>
// 定义Props 类型
// 当定义可选值时必需要添加默认值, 否则错误
interface Props {
  width?: string
  height?: string
  videoSrc: string
}
// 定义 Emits 类型
interface Emits {
  (e:'updateCount', num:number):void
}
// 但凡填写默认值的 属性 都会在外部加一个ts内置工具 Partial 全部变成可选值 外部不会报红 错误
// 但是浏览器控制台会发出警告 Missing required prop: "***" // 传递则忽略警告

withDefaults(defineProps<Props>(), {
  width: '300',
  height: '300',
  videoSrc: 'micro_plants_1' // 如果外部不传递videoSrc读取默认值，另外控制台会发出警告 // 传递则忽略警告
})

const emits = defineEmits<Emits>()
const clickUpdateCount = () => {
  emits('updateCount', 100)
}

</script>

<style>

</style>