<template>
    <div>
        <Header>{{title}}</Header>
        <div class="h44"></div>
        <div class="img-list">
            <div class="item" v-for="(item, index) in data" :key="index" @click="jumpDetail(item.newsId)">
                <div class="item-img">
                    <img :src="item.pic" alt="">
                </div>
                <div class="item-span">{{item.title}}</div>
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
                setting:{
                    page:1,
                    rows:10,
                    type:7
                },
                data:[]
            }
        },
        methods: {
            getData () {
                this.$axios.get('/news/newsList.do',this.setting).then(res => {
                    // console.log(res.data.rows)
                    res.data.rows.map(item => {
                        if(item.title.length >= 24){
                            item.title = item.title.slice(0,24) + '...'
                        }
                    })
                    this.data = res.data.rows
                })
            },
            jumpDetail (id) {
                this.$router.push({
                    path:'/newsDetail',
                    query:{
                        id,
                        title:this.title
                    }
                })
            }
        },
        created () {
            this.title = this.$route.params.title
            this.getData()
        }
    }
</script>

<style scoped lang="less">
.img-list{
    display: flex;
    flex-wrap: wrap;
    .item{
        position: relative;
        z-index: 2;
        display: block;
        margin: -1px;
        padding: 16px;
        font-size: 16px;
        color: #666;
        width: 50%;
        border: none;
        .item-img{
            img{
                width: 100%;
                height: 116.63px;
            }
        }
        .item-span{
            font-size: 13px;
            line-height: 1.5;
            white-space: normal;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
}
</style>