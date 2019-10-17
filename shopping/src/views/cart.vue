<template>
    
</template>

<script>
    import product_data from '../product';
    export default {
        name: "cart",
        computed:{
            cartList(){
                return this.$store.state.cartList;
            },
            productDictList(){
                const dict = {};
                this.productList.forEach(item=>{
                    dict[item.id] = item;
                });
                return dict;
            }
        }
    }
</script>

<style scoped>

</style>