import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      first_name: 'felipe',
      last_name: 'martins',
      email: 'fef@gmail.com'
    }, 
    products: [],
    cart: []

  },
  
  mutations: {
    storeUser(state, data){
      state.user = data
      
      console.log('storeuser', data);
    }
  },
  
  actions: {
  },

  getters: {
  },
 
 
})
