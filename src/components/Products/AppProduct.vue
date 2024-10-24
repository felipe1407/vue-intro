<template>
    <div class ="card">
        {{ product.name }} - {{ product.price }} <br><br>
        
       <button @click="addProduct">
        adicionar
       </button>
       <br>
       
       <button v-if ="isInCart()" @click="removeProduct">
        Remover
       </button>

    </div>
</template>

<script>


export default {
    props: {
        product: Object
    }, 
    methods: {
        addProduct() {
            this.$store.commit('addProduct', this.product)
        },
        removeProduct() {
            this.$store.commit('removeProduct', this.product.id)
        },
        
        isInCart() {
            const cart = this.$store.state.cart;
            return cart.some((item) => item.id === this.product.id);
    },

    }
}
</script>

<style >
.card {
    background: rgb(240, 239, 238);
    padding: 6px;
    margin-bottom: 5px;
}



</style>
