<template>
  <div class="daily">
    <div class="daily-menu">
      <div class="daily-menu-item" @click="handleToRecommend" :class="{ on:type === 'recommend' }">每日推荐</div>
      <div class="daily-menu-item" :class="{ on:type === 'daily'}" @click="showThemes = !showThemes">主题日报</div>
      <ul v-show="showThemes">
        <li v-for="item in themes" :key="item.themeId">
          <a :class="{on:item.id === themeId && type === 'daily'}" @click="handleToTheme(item.id)">{{ item.name }}</a>
        </li>
      </ul>
    </div>
    <div class="daily-list" ref="list">
      <template v-if="type === 'recommend'">
        <div v-for="list in recommendList" :key="list.themeId">
          <div class="daily-date">{{ formatDay(list.date) }}</div>
          <Item v-for="item in list.stories" :data="item" :key="item.id" @click.native="handleClick(item.id)"></Item>
        </div>
      </template>
      <template v-if="type === 'daily'">
        <Item v-for="item in list" :data="item" :key="item.id"></Item>
      </template>
    </div>
    <div class="daily">

      <DailyArticle :id="articleId"></DailyArticle>
    </div>

  </div>
</template>
<script>
  import $ from './lib/util';
  import Item from "./components/item";
  import DailyArticle from "./components/daily-article";
  export default {
    components: {DailyArticle, Item },
    data (){
      return {
        themes: [],
        showThemes: false,
        type: 'recommend',
        list: [],
        themeId: 0,
        //每日推荐相关数据
        recommendList: [],
        dailyTime: $.getTodayTime(),
        isLoading: false,
        articleId: 0
      }
    },
    methods: {
      //点击每日推荐调用方法
      handleToRecommend(){
        this.type = 'recommend';
        this.recommendList = [];
        this.dailyTime = $.getTodayTime();
        this.getRecommendList();
      },
      //获取每日推荐列表数据
      getRecommendList(){
        this.isLoading = true;
        const prevDay = $.prevDay(this.dailyTime+86400000);
        $.ajax.get('news/before/'+prevDay).then(res=>{
          this.recommendList.push(res);
          this.isLoading = false;
        });
      },
      handleToTheme(id){
        //改变菜单分类
        this.type = 'daily';
        //设置当前点击子类的主题日报 id
        this.themeId = id;
        //清空中间栏数据
        this.list = [];
        $.ajax.get('theme/'+id).then(res => {
          //过滤掉类型为 1的文章，该类型下的文章为空
          this.list = res.stories.filter(item => item.type !== 1);
        })
      },
      getThemes(){
        $.ajax.get('themes').then(res => {
          this.thems = res.others;
        })
      },
      formatDay(date){
        let month = date.substr(4,2);
        let day = date.substr(6,2);
        if(month.substr(0,1)==='0') month=month.substr(1,1);
        if(day.substr(0,1)==='0') day=day.substr(1,1);
        return `${month}月 ${day}日`;
      },
      handleClick(id){
        this.articleId = id;
      }
    },
    mounted (){
      this.getThemes();
      this.getRecommendList();
      const $list = this.$refs.list;
      $list.addEventListener('scroll',()=>{
        if(this.type === 'daily' || this.isLoading) return;
        if($list.scrollTop+document.body.clientHeight >= $list.scrollHeight){
          this.dailyTime-=86400000;
          this.getRecommendList();
        }
      });
    }
  }
</script>
