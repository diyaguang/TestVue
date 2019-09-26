<template>
    <div>
        Hello {{ name }}<br>
        <v-tittle title="Vue组件化"></v-tittle>
        <v-button @click="handleClick">点击按钮</v-button>
    </div>

</template>

<script>
    import vTittle from './tittle.vue';
    import vButton from './button.vue'

    export default {
        name: "app",
        data () {
            return {
                name: "Vue.js"
            }
        },
        components: {
            vTittle: vTittle,
            vButton: vButton
        },
        methods: {
            handleClick(e){
                console.log(e);
            }
        }
    }
</script>

<style scoped>

    div{
        color: #f60;
        font-size: 24px;
    }
</style>