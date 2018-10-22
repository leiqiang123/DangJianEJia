<template>
    <div>
        <div class="header clearfix">我的党建</div>
        <!-- 头部登录部分 -->
        <div>
            <div v-if="isShow" class="user">
                <div class="user-img">
                    <img src="../../public/imgs/person/我的党建_iPhone_assets/头像.png" alt="">
                </div>
                <div class="user-login">
                    <router-link class="user-link" to="/login">你还没有登录，请登录</router-link>
                </div>
            </div>
            <div v-else class="user">
                <div class="user-img">
                    <img :src="userData.header" alt="">
                </div>
                <div class="user-login">
                    <router-link class="user-link" to="">{{userData.username}}</router-link>
                </div>
            </div>
        </div>
        <!-- 中间部分 -->
        <div @click="JumpPersonDetail" class="item">
            <mt-cell style="height:54px;" title="个人信息">
                <span><img slot="icon" src="../../public/imgs/person/我的党建_iPhone_assets/形状-7-拷贝-5.png"></span>
                <img slot="icon" src="../../public/imgs/person/我的党建_iPhone_assets/个人信息.png" width="32" height="32">
            </mt-cell>
        </div>
        <div @click="JumpScore" class="item">
            <mt-cell style="height:54px;" title="个人量化分">
                <span><img slot="icon" src="../../public/imgs/person/我的党建_iPhone_assets/形状-7-拷贝-5.png"></span>
                <img slot="icon" src="../../public/imgs/person/我的党建_iPhone_assets/量化积分icon.png" width="32" height="32">
            </mt-cell>
        </div>
        <div @click="JumpUpPassword" class="item">
            <mt-cell style="height:54px;" title="修改密码">
                <span><img slot="icon" src="../../public/imgs/person/我的党建_iPhone_assets/形状-7-拷贝-5.png"></span>
                <img slot="icon" src="../../public/imgs/person/我的党建_iPhone_assets/修改密码icon.png" width="32" height="32">
            </mt-cell>
        </div>
        <div class="item">
            <router-link to="">
                <mt-cell style="height:54px;" title="党费缴纳">
                    <span><img slot="icon" src="../../public/imgs/person/我的党建_iPhone_assets/形状-7-拷贝-5.png"></span>
                    <img slot="icon" src="../../public/imgs/person/我的党建_iPhone_assets/党费缴纳.png" width="32" height="32">
                </mt-cell>
            </router-link>
        </div>
        <div v-if="!isShow" style="padding:10px; margin-top:40px;">
            <mt-button type="danger" size="large" @click="handleLogout">退出登录</mt-button>
        </div>
        <!-- <div>
            <form action="" enctype="multipart/form-data"></form>
            <input type="file" accept="image/jpeg,image/png,image/jpg" name="" id="" @change="up">
        </div> -->
        
        <!-- 底部导航部分 -->
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
                            <div style="color:#ef473a; margin-top:-1px;">我的党建</div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        data () {
            return {
                isShow:true,
            }
        },
        methods: {
            handleLogout () {
                // this.axios.get('/logout').then(res => {
                //     console.log(res)
                //     let userData = {
                //         username: '',
                //         idNumber: '',
                //         avatar: ''
                //     }
                //     this.isShow = true
                //     if(res.data.code == 200){
                //         this.$toast('退出登录成功')
                //         setTimeout(() => {
                //             this.$store.commit('CHANGE_USERDATA',userData)
                //             this.$router.push('/person')
                //         },1000)
                //     }else{
                //         setTimeout(() => {
                //             this.$toast('登录过期，请先登录')
                //             this.$store.commit('CHANGE_USERDATA',userData)
                //         },1000)
                //     }
                // })
                let userData = {}
                let token = {}
                this.isShow = true
                this.$toast('退出登录成功')
                setTimeout(() => {
                    this.$store.commit('CHANGE_USERDATA',userData)
                    this.$store.commit('CHANGE_TOKEN',userData)
                    this.$router.push('/login')
                },1000)
            },
            JumpPersonDetail () {
                if(this.$store.state.userData.username){
                    this.$router.push('/personDetail')
                }else{
                    this.$router.push('/login')
                }
            },
            JumpUpPassword () {
                if(this.$store.state.userData.username){
                    this.$router.push('/upPassword')
                }else{
                    this.$router.push('/login')
                }
            },
            JumpScore () {
                if(this.$store.state.userData.username){
                    this.$router.push('/score')
                }else{
                    this.$router.push('/login')
                }
            },
            up ($event) {
                console.log($event)
            }
        },
        created () {
            // console.log(this.$store.state.userData.username)
            if(this.$store.state.userData.username){
                this.isShow = false
            }
        },
        // computed : {...mapState(['userData'])}
        computed: mapState({
            userData: state => state.userData
        })
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
.user{
    background: #c50206;
    height: 140.63px;
    color: #fff;
    text-align: center;
    font-size: 12px;
    // box-sizing: content-box;
    .user-img img{
        margin-top: 36.5px;
        width: 1.25rem;
        height: 62.5px;
        border-radius: 50%;
    }
    .user-login{
        line-height: 1.5;
    }
    .user-link{
        color: #fff;
        text-decoration: none;
    }
}
.item{
    color: #666;
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
        }
    }
}
</style>