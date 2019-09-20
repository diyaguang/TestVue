<template>
  <div>This is test page,"{{ message }}"<br>

    <div>
      <input type="text" @input="handleInput" placeholder="输入...">
      <p>输入的内容是：{{ showText }}</p>
    </div>
  </div>

</template>

<script>
    export default {
        name: "ShopCart.vue",
        data()  {
            return {
                showText: '',
                message: 'Shop Cart'
            }
        },
        methods: {
            handleInput: function (e) {
                this.showText = e.target.value;
            }
        }
    }
</script>

<style scoped>

</style>
