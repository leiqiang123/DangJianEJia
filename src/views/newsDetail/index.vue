<template>
    <div>
        <Header>信工新闻眼</Header>
        <div class="h44"></div>
        <div style="padding:10px;">
            <h3 class="news-title">{{newsDetail.title}}</h3>
            <div id="content">
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
                newsDetail:{}
            }
        },
        methods: {
            getNewsDetail () {
                this.$axios.get(`/hhdj/news/newsContent.do?newsId=${this.$route.query.id}`).then(res => {
                    console.log(res.data.data)
                    this.newsDetail = res.data.data
                    // let content = document.getElementById('content')
                    // content.innerHTML = res.data.data.content
                })
            }
        },
        created () {
            console.log(this.$route.query.id)
            this.getNewsDetail()
        }
    }
</script>

<style scoped>
.news-title{
    font-size:24px; 
    margin-bottom: 10px;
    font-weight: 500;
}
</style>