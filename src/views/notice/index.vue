<template>
    <div>
        <div class="header clearfix">
            通知早知道
        </div>

        <!-- <div class="notice-title">关于我院党总支近期将举办党的十九大知识竞赛的通知</div> -->

        <div>
            <div class="row" v-for="(item, index) in noticeData" :key="index">
                <div class="left-img">
                    <img src="../../public/imgs/notice/drawable-hdpi/iconfont_gonggaotongzhi.png" alt="">
                </div>
                <div class="col">
                    <div class="notice-title">{{item.title}}</div>
                    <div class="notice-time">{{item.currentTime}}</div>
                </div>
            </div>
        </div>
        <!-- <ul>
            <li v-for="(item, index) in noticeData" :key="index">
                <div class="row">
                    <div class="left-img">
                        <img src="../../public/imgs/notice/drawable-hdpi/iconfont_gonggaotongzhi.png" alt="">
                    </div>
                    <div class="col">
                        <div class="notice-title">{{item.title}}</div>
                        <div class="notice-time">{{item.currentTime}}</div>
                    </div>
                </div>
            </li>
        </ul> -->
        <div class="loading-content">
            <div class="content-span">
                <span>没有数据了</span>
            </div>
        </div>
        
        

        <div class="footer">
            <div class="tabs">
                <div class="tab-item" style="border-top: 2px solid #fff;">
                    <router-link class="link" to="/">
                        <div>
                            <img src="../../public/imgs/index/drawable-xhdpi/党_grey.png" alt="">
                            <div>首页</div>
                        </div>
                    </router-link>
                </div>
                <div class="tab-item" style="border-top: 2px solid rgb(239, 71, 58);">
                    <router-link class="link" to="/notice">
                        <div>
                            <img src="../../public/imgs/index/drawable-xhdpi/消息_red.png" alt="">
                            <div style="color:#ef473a;">通知早知道</div>
                        </div>
                    </router-link>
                </div>
                <div class="tab-item" style="border-top: 2px solid #fff;">
                    <router-link class="link" to="/person">
                        <div>
                            <img src="../../public/imgs/index/drawable-xhdpi/会员_grey.png" alt="">
                            <div>我的党建</div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                noticeData:[]
            }
        },
        methods: {
            getData () {
                this.$axios.get('/hhdj/news/newsList.do?page=1&rows=10&type=2').then(res => {
                    console.log(res.data.rows)
                    this.noticeData = res.data.rows
                    console.log(this.noticeData)
                })
            }
        },
        created () {
            this.getData()
        }
    }
</script>

<style scoped lang="less">
.header{
    width: 7.5rem;
    height: 44px;
    background: #c50206;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    line-height: 44px;
}

.row{
    padding: 10px;
    display: flex;
    height: 97px;
    border-bottom: 1px solid #E5E5E5;
    .left-img{
        width: 1.42rem;
        text-align: center;
        padding: 5px;
        // padding-top: 20px;
        img{
            width: 0.7rem;
            height: 37px;
        }
    }
    .col{
        padding: 5px;
        margin-top: 1px;
        margin-left: 8px;
        font-weight: 600;
        .notice-title{
            font-size: 15px;
            color: #666;
        }
        .notice-time{
            font-size: 12px;
            margin: 3px 0;
            color: #999;
        }
    }
}

.loading-content{
    text-align: center;
    .content-span{
        color: #666;
        font-size: 14px;
        text-align: center;
        padding: 10px 0;
    }
}

.footer{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    width: 100%;
    .tabs{
        height: 49px;
        background-color: #fff;
        border: none;
        color: #999;
        display: flex;
        .tab-item{
            margin-top: -2px;
            width: 2.5rem;
            text-align: center;
            img{
                margin-top: 2px;
            };
            div{
                font-size: 0.24rem;
                margin-top: 2px;
                color: #999;
            }
            .link{
                text-decoration: none;
            }
            .link:active{
                background: none;
            }
        }
    }
}
</style>