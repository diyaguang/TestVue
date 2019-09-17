<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span v-pre>{{ name }}</span> <br>
    <span v-html="link"></span> <br>
    <p v-if="show">这是一段文本</p><br>
    <button v-on:click="handleClose">点击隐藏</button><br>
    <div>
      {{ number /10 }} <br>
      {{ text.split(',').reverse().join(',') }} <br>
      {{ isOK?'确定':'取消'}} <br>
      {{ date | formatDate }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'This is dygstuio page',
      link: '<a href="#">这是一个链接</a>',
      number: 1983,
      text: 'This,my,first,vue,page',
      date: new Date(),
      show: true
    }
  },
  methods:{
    handleClose: function () {
      this.show = false
    }
  },
  filters: {
    formatDate: function (value) {
      var date = new Date(value)
      var year = date.getFullYear()
      var month = padDate(date.getMonth() + 1)
      var day = padDate(date.getDate())
      var hours = padDate(date.getHours())
      var minutes = padDate(date.getMinutes())
      var seconds = padDate(date.getSeconds())
      return year + '-' + month + '-' + day + '' + hours + ':' + minutes + ':' + seconds;
    }
  },
  mounted () {
    var _this = this;
    this.timer = setInterval(function () {
      _this.date = new Date();
    },1000);
  },
  beforeDestroy () {
    if(this.timer){
      clearInterval(this.timer);
    }
  }
}

var padDate = function (value) {
  return value < 10 ? '0' + value : value
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
