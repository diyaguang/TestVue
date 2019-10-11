<template>
    <div class="daily-article">
        <div class="daily-article-title">{{ data.title }}</div>
        <div class="daily-article-content" v-html="data.body"></div>
    </div>
</template>

<script>
    import $ from '../lib/util';
    export default {
        name: "daily-article",
        props: {
            id: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                data: {}
            }
        },
        methods: {
            getArticle(){
                $.ajax.get('news/'+this.id).then(res=>{
                   res.body = res.body.replace(/src="http/g, 'src="'+$.imgPath+'http');
                   res.body = res.body.replace(/src="https/g, 'src="'+$.imgPath+'https');
                   this.data = res;
                   window.scroll(0,0);
                });
            }
        },
        watch: {
            id(val){
                if(val)this.getArticle();
            }
        }
    }
</script>

<style scoped>

</style>
