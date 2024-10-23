<template>
  <div>
      <BaseCard></BaseCard> <br><br>
     


      <BaseAlert
          variant="success">
      </BaseAlert>
  </div>

</template>

<script>
import BaseCard from '@/components/BaseCard.vue';
import BaseAlert from '@/components/BaseAlert.vue';
export default {
  name: 'App',
  components: {
    BaseCard, 
    BaseAlert,

  },
  data() {
    return{
      
    
  }
},

  watch : {},

  computed : {

  },

  methods: {
    enviar(){

    }
  }

};


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