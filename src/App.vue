<template>
  <img alt="Vue logo" src="./assets/logo.png">

    <button @click="updateUser()">
      Atualizar perfil
    </button>
  <HelloWorld
      user=""
      msg="Welcome to Your Vue.js App"/>

      {{ $store.state.user.first_name }}

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>