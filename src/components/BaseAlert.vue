<template>
    <div :class="baseClass">
        Seu formulário foi enviado com sucesso!
    </div>
</template>

<script>
export default {
   props: [
        'variant', 'text'],
    computed: {

        baseClass(){
            return [
                'alert', 
                this.variant ? `alert-${this.variant}` : ''
            ]
        },
    }
        
}
</script>





<style scoped>
.alert {
    padding: 5px;
    border-radius: 6px;
    color: gray;
    background :#ddd;

}

.alert-success{
    background: greenyellow ;
    color: white;
}

.alert-danger{
    background: red;
    color: black;
}

</style>