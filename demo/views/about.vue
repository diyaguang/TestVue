<template>
    <div>
        <h1>介绍页</h1>
        <button @click="handleRouter">跳转到  user </button>
    </div>
</template>

<script>
    export default {
        name: "about",
        methods: {
            handleRouter(){
                this.$router.push('/user/1122334455');
            }
        }
    }
</script>

<style scoped>

</style>