import storage from 'store'

const app = {
  state: {
    lang: 'zh-CN',
  },

  mutations: {
    SET_LANGUAGE: (state, lang) => {
      state.lang = lang
    },
  },

  actions: {
   

  }
}

export default app
