<template>
    <div>
        <Header>{{title}}</Header>
        <div class="h44"></div>
        <mt-spinner v-if="isLoading" class="loading" type="snake"></mt-spinner>
        <div style="padding:10px;">
            <h3 class="news-title">{{newsDetail.title}}</h3>
            <div class="news-content" v-html="newsDetail.content">
                <!-- {{newsDetail.content}} -->
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '../../components/header'
    export default {
        components:{
            Header
        },
        data () {
            return {
                title:'',
                newsDetail:{},
                isLoading:false
            }
        },
        methods: {
            getNewsDetail () {
                this.isLoading = true
                this.$axios.get('/news/newsContent.do',{newsId: this.$route.query.id}).then(res => {
                    // console.log(res.data.data)
                    this.newsDetail = res.data.data
                    this.isLoading = false
                })
            }
        },
        created () {
            // console.log(this.$route.query.id)
            this.title = this.$route.query.title
            this.getNewsDetail()
        }
    }
</script>

<style scoped lang="less">
.news-title{
    font-size:24px; 
    margin-bottom: 10px;
    font-weight: 500;
}
.news-content{
    font-size: 12px;
    /deep/ p{
        margin: 0 0 10px;
        line-height: 24px;
        vertical-align: baseline;
        font: inherit;
        img{
            max-width: 100%;
            margin: auto;
            margin-bottom: 20px;
        }
    }
}
</style>