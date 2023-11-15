import storage from 'store'

const user = {
  state: {
    account: storage.get('account') || '',
  },

  mutations: {
    SET_ACCOUNT: (state, account) => {
      state.account = account
    },
  },

  actions: {
   

  }
}

export default user
