<template>
    <div>
        <Header>{{title}}</Header>
        <div class="h44"></div>
        <mt-spinner v-if="isLoading" class="loading" type="snake"></mt-spinner>
        <div v-else>
            <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
                <ul>
                    <li v-for="(item, index) in newsListData" :key="index">
                        <div class="news-item">
                            <router-link :to="{path:'/newsDetail', query:{id:item.newsId,title}}">
                                <div class="news-img">
                                    <img :src="item.pic" alt="">
                                </div>
                                <div class="news-content">
                                    <h3>{{item.title}}</h3>
                                    <div class="bottom-bar">
                                        <span>
                                            {{item.currentTime}}
                                        </span>
                                        <span class="icon">
                                            <i class="icon-eye"></i>
                                            {{item.count}}
                                        </span>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </li>
                </ul>
            </mt-loadmore>
            <!-- <div class="news-item" v-for="(item, index) in newsListData" :key="index">
                <router-link :to="{path:'/newsDetail', query:{id:item.newsId,title}}">
                    <div class="news-img">
                        <img :src="item.pic" alt="">
                    </div>
                    <div class="news-content">
                        <h3>{{item.title}}</h3>
                        <div class="bottom-bar">
                            <span>
                                {{item.currentTime}}
                            </span>
                            <span class="icon">
                                <i class="icon-eye"></i>
                                {{item.count}}
                            </span>
                        </div>
                    </div>
                </router-link>
            </div> -->
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
                newsListData:[],
                title:'',
                newsSettings:{
                    page:1,
                    rows:10,
                    type:0
                },
                isLoading:false,
                allLoaded:false
            }
        },
        methods: {
            getnewsData () {
                this.isLoading = true
                this.$axios.get('/news/newsList.do',this.newsSettings).then(res => {
                    // console.log(res.data.rows)
                    res.data.rows.map(item => {
                        if(item.title.length > 30){
                            item.title = item.title.slice(0,28) + '...'
                        }
                    })
                    this.newsListData = res.data.rows
                    this.isLoading = false
                })
            },
            loadTop () {
                // console.log(1)
                this.getnewsData()
                this.$refs.loadmore.onTopLoaded();
            },
            loadBottom () {
                console.log(2)
                // 加载更多数据
                // this.allLoaded = true;// 若数据已全部获取完毕
                this.$refs.loadmore.onBottomLoaded();
            }
        },
        created () {
            // console.log(this.$route.query)
            this.title = this.$route.query.title
            this.newsSettings.type = this.$route.query.typeId
            this.getnewsData()
        }
    }
</script>

<style scoped lang="less">
.news-item{
    height: 100px;
    padding: 10px;
    padding-left: 100px;
    border-bottom: 1px solid #ddd;
    position: relative;
    .news-img{
        // background-size: cover;
        // background-position: 50%;
        position: absolute;
        left: 10px;
        top: 10px;
        img{
            width: 1.6rem;
            height: 80px;
        }
    }
    .news-content{
        color: #666;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h3{
            font-size: 16px;
            height: 49px;
            color: #000;
            line-height: 1.5;
            font-weight: 500;
        }
        .bottom-bar{
            font-size: 10px;
            .icon{
                float: right;
                .icon-eye{
                    display: inline-block;
                    // background: #fff;
                    color: #ccc;
                    width: 0.308rem;
                    height: 13px;
                    background-image: url(../../public/imgs/newseyes/drawable-hdpi/阅读量.png)
                }
            }
        }
    }
}
</style>