import { createStore } from 'vuex'

export default createStore({
  state: {
    user: JSON.parse(localStorage.getItem('user') || 'null')
  },
  mutations: {
    setUser (state, payload) {
      state.user = {
        ...payload
      }
      // 为了防止页面刷新，数据丢失,数据持久化
      localStorage.setItem('user', JSON.stringify(payload))
    }
  },
  actions: {
  },
  modules: {
  }
})
