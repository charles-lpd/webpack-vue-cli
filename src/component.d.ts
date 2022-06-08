declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    RouterLink: typeof import('vue-router')['RouterLink']
    RouterView: typeof import('vue-router')['RouterView']
  }
  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
export {}
