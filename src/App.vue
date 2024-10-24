<template>
    <AppProducts/>
    <br><br>
    
    
    <pre>Quantidade de produtos adicionados no carrinho : {{ $store.state.cart }} </pre>
    
     <br>
    
    
    <button @click="updateUser()">
      Atualizar perfil
    </button>

</template>

<script>
import AppProducts from '@/components/Products/AppProducts.vue';

export default {
  name: 'App',
  components: {
    AppProducts,
  },
    data() {
      return {
          
      }
    },

    methods: {
        updateUser() {
          const newUser = {
            first_name: 'fernando',
      last_name: 'cardoso',
      email: 'fern@gmail.com'
          }
          this.$store.commit('storeUser', newUser)
        }
    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>