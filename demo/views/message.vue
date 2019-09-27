<template>
    <div>
        {{ message }}
        <button @click="handleClick">Change word</button>
    </div>
</template>

<script>
    import Button from "../button";
    export default {
        name: "message",
        data(){
            return {
                message: 'Hello World.'
            };
        },
        methods: {
            handleClick (){
                this.message = 'Hello Vue.';
            }
        }
    }
</script>

<style scoped>

</style>