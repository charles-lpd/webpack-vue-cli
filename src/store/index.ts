import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

export interface State {
  count: number
}
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 10
  }
})
// 定义自己的 `useStore` 组合函数
export function useStore() {
  return baseUseStore(key)
}
