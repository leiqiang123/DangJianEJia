<template>
    <div>
        <h4>我是个人中心页</h4>

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
                <div class="tab-item" style="border-top: 2px solid #fff;">
                    <router-link class="link" to="/notice">
                        <div>
                            <img src="../../public/imgs/index/drawable-xhdpi/消息_grey.png" alt="">
                            <div>通知早知道</div>
                        </div>
                    </router-link>
                </div>
                <div class="tab-item" style="border-top: 2px solid rgb(239, 71, 58);">
                    <router-link class="link" to="/person">
                        <div>
                            <img src="../../public/imgs/index/drawable-xhdpi/会员_red.png" alt="">
                            <div style="color:#ef473a;">我的党建</div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="less">
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