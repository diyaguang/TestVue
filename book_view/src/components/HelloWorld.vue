<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span v-pre>{{ name }}</span> <br>
    <span v-html="link"></span> <br>
    <p v-if="show">这是一段文本</p><br>
    <button v-on:click="handleClose">点击隐藏</button>
    <br>
    <div>
      {{ number /10 }} <br>
      {{ text.split(',').reverse().join(',') }} <br>
      {{ isOK?'确定':'取消'}} <br>
      {{ date | formatDate }}
    </div>
    <div>
      这里是动态计算金额的：{{ prices }}
    </div>
    <div>
      <template v-if="type==='name'">
        <label>用户名:</label>
        <input placeholder="输入用户名">
      </template>
      <template v-else>
        <label>邮箱:</label>
        <input placeholder="输入邮箱">
      </template>
      <button @click="handleToggleClick">切换输入类型</button>
    </div>
    <div>
      列表显示 数组元素:<br>
      <ul>
        <li v-for="(book,index) in books">{{index }} - {{ book.name }}</li>
      </ul>
    </div>
    <div>
      遍历对象属性：<br>
      <ul>
        <li v-for="(value,key,index) in user">
          {{index}} - {{key}}:{{value}}
        </li>
      </ul>
    </div>
    <div>
      点击次数：{{counter}}  <button @click="counter++">+1</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'This is dygstuio page',
                link: '<a href="#">这是一个链接</a>',
                number: 1983,
                text: 'This,my,first,vue,page',
                date: new Date(),
                show: true,
                package1: [
                    {
                        name: 'iPhone 7',
                        price: 7191,
                        count: 3
                    },
                    {
                        name: 'ipad',
                        price: 2888,
                        count: 1
                    }
                ],
                package2: [
                    {
                        name: 'apple',
                        price: 3,
                        count: 5
                    },
                    {
                        name: 'banana',
                        price: 2,
                        count: 10
                    }
                ],
                type: 'name',
                books: [
                    {name: '《Vue.js 实战》'},
                    {name: '《JavaScript 语言精粹》'},
                    {name: '《JavaScript 高级程序设计》'}
                ],
                user: {
                    name:'Aresn',
                    gender:'男',
                    age:26
                },
                counter: 0
            }
        },
        computed: {
            //默认使用计算属性的 get 方式，还有一个 set 方式来设置属性值
            prices: function () {
                // eslint-disable-next-line no-unused-vars
                var prices = 0;
                for (var i = 0; i < this.package1.length; i++) {
                    prices += this.package1[i].price * this.package1[i].count;
                }
                for (var i = 0; i < this.package2.length; i++) {
                    prices += this.package2[i].price * this.package2[i].count;
                }
                return prices;
            }
        },
        methods: {
            handleClose: function () {
                this.show = false
            },
            handleToggleClick: function () {
                this.type = this.type === 'name' ? 'mail' : 'home';
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
                return year + '-' + month + '-' + day + '  ' + hours + ':' + minutes + ':' + seconds
            }
        },
        mounted() {
            var _this = this
            this.timer = setInterval(function () {
                _this.date = new Date()
            }, 1000)
        },
        beforeDestroy() {
            if (this.timer) {
                clearInterval(this.timer)
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
