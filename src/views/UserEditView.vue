<template>
    <div>
      
            {{  $route.query.page }}
        
        Usuário <br>

        <button @click="login()">
            Login
        </button>
    </div>
</template>

<script>
    export default {
        created() {
            console.log(this.$router);
        },

        methods: {
            login() {
            this.$router.push('/about')
            console.log('chegou');
        }
    }
}
</script>
