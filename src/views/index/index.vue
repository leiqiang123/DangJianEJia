<template>
    <div>
        <div>
            <div class="header clearfix">
                <img class="header-img" src="../../public/imgs/index/drawable-hdpi/logo.png" alt="">
                <router-link v-if="isShow" class="a" to="/login">登录</router-link>
            </div>
            <mt-swipe style="height:187.5px; margin-top: 44px;" :auto="3000">
                <mt-swipe-item v-for="(item,index) in rowsData" :key="index">
                    <img class="carousel-img" :src="item.imgUrl" alt="">
                    <div class="carousel-bottom">{{item.title}}</div>
                </mt-swipe-item>
            </mt-swipe>
            <div class="menu">
                <div class="menu-row">
                    <router-link to="/newseye">
                        <div class="menu-cell">
                            <img src="../../public/imgs/index/drawable-hdpi/icon_01@2x.png" alt="">
                            <div>信工新闻眼</div>
                        </div>
                    </router-link>
                    <router-link to="/life">
                        <div class="menu-cell">
                            <img src="../../public/imgs/index/drawable-hdpi/icon_03@2x.png" alt="">
                        <div>掌上组织生活</div>
                    </div>
                    </router-link>
                    <router-link to="/interaction">
                        <div class="menu-cell">
                            <img src="../../public/imgs/index/drawable-hdpi/icon_05@2x.png" alt="">
                            <div>党员云互动</div>
                        </div>
                    </router-link>
                </div>
                <div class="menu-row">
                    <div class="menu-cell">
                        <img src="../../public/imgs/index/drawable-hdpi/icon_04@2x.png" alt="">
                        <div>党建一点通</div>
                    </div>
                    <div class="menu-cell">
                        <img src="../../public/imgs/index/drawable-hdpi/icon_06@2x.png" alt="">
                        <div>党员亮身份</div>
                    </div>
                    <div class="menu-cell">
                        <img src="../../public/imgs/index/drawable-hdpi/icon_02@2x.png" alt="">
                        <div>党史上的今天</div>
                    </div>
                </div>
            </div>
            <div class="banner">
                <img class="banner-img" src="../../public/imgs/index/drawable-mdpi/banner02.png" alt="">
            </div>
            <div class="tese">
                <div class="tese-cell"></div>
                <div class="tese-cell">
                    <div></div>
                    <div></div>
                </div>
                <div class="tese-cell">
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div style="width:100%; height:49px;"></div>
            <div class="footer">
                <div class="tabs">
                    <div class="tab-item" style="border-top: 2px solid rgb(239, 71, 58);">
                        <div>
                            <img src="../../public/imgs/index/drawable-xhdpi/党_red.png" alt="">
                            <div style="color:#ef473a;">首页</div>
                        </div>
                    </div>
                    <div class="tab-item" style="border-top: 2px solid #fff;">
                        <router-link class="link" to="/notice">
                            <div>
                                <img src="../../public/imgs/index/drawable-xhdpi/消息_grey.png" alt="">
                                <div>通知早知道</div>
                            </div>
                        </router-link>
                    </div>
                    <div class="tab-item" style="border-top: 2px solid #fff;">
                        <router-link class="link" to="/person">
                            <div>
                                <img src="../../public/imgs/index/drawable-xhdpi/会员_grey.png" alt="">
                                <div style="margin-top:-1px;">我的党建</div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data () {
            return {
                rowsData:[],
                isShow:true
            }
        },
        methods: {
            getCarouselData () {
                this.$axios.get('/hhdj/carousel/carouselList.do').then(res => {
                    // console.log(res.data)
                    this.rowsData = res.data.rows
                })
            }
        },
        created () {
            if(this.$store.state.userData.username){
                this.isShow = false
            }
            this.getCarouselData()
        }        
    }
</script>

<style scoped lang="less">
.header{
    position: fixed;
    top: 0;
    z-index: 998;
    width: 7.5rem;
    height: 44px;
    background: #c50206;
    padding: 5px;
    .header-img{
        width: 2.6rem;
        height: 31.27px;
        float: left;
    }
    .a{
        font-size: 0.34rem;
        font-weight: 300;
        float: right;
        color: #fff;
        text-decoration: none;
        line-height: 0.68rem;
        padding-right: 2px;
    }
}
.carousel-img{
    width: 7.5rem;
    height: 187.5px;
    position: relative;
}
.carousel-bottom{
    position: absolute;
    z-index: 11;
    background: rgba(0,0,0,.5);
    padding: 4px;
    color: #fff;
    bottom: 0;
    left: 0;
    width: 100%;
    font-size: 14px;
}

.menu{
    background-image: url(../../public/imgs/index/drawable-hdpi/bt_bg@2x.png);
    height: 197px;
    font-size: 0.24rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .menu-row{
        display: flex;
        justify-content: space-around;
        .menu-cell{
            color: #666;
            text-align: center;
            vertical-align: middle;
            img{
                height: 1rem;
                width: 1rem;
            }
        }
    }
}
.banner{
    width: 7.5rem;
    height: 90.09px;
    .banner-img{
        width: 7.5rem;
        height: 90.09px;
    }
}
.tese{
    background-image: url(../../public/imgs/index/drawable-xxhdpi/专栏.png);
    background-size: 100% 100%;
    width: 7.5rem;
    height: 165px;
    display: table;
    .tese-cell{
        display: table-cell;
        text-align: center;
        vertical-align: middle;
        div{
            height: 50%;
        }
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