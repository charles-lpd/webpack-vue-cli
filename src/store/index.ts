import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { defaultState, State } from './state'
import createPersistedState from 'vuex-persistedstate'
export const vuexKey: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: defaultState,
  mutations: {
    updateCount(state, count) {
      state.count = count
    }
  },
  actions: {
    async asyncUpdateCount({commit}, count:number) {
      commit('updateCount', count)
    }
  },
  plugins: [createPersistedState()]
})
// 定义自己的 `useStore` 组合函数
export const useStore = (): Store<State> => {
  return baseUseStore(vuexKey)
}
