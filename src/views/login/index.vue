<template>
    <div style="background-color: #c50206; height:100vh;">
        <Header>登录</Header>
        <div class="h44"></div>
        <div class="login-content">
            <div class="content-logo">
                <img src="../../public/imgs/login/logo.png" alt="">
            </div>
        </div>
        <form class="login-form">
            <input class="form-input" type="text" v-model="userData.id_card" placeholder="身份证号">
            <input class="form-input" type="password" v-model="userData.password" placeholder="密码">
            <mt-button style="width:100%; font-size:14px;" type="danger" @click="handleLogin">登录</mt-button>
        </form>
        <div class="register">
            <span>还没有账号？</span>
            <router-link style="color:yellow" to="/register">点我注册</router-link>
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
                userData:{
                    id_card: '',
                    password: '',
                },
            }
        },
        methods: {
            handleLogin () {
                // this.axios.post('/login',this.userData).then(res => {
                //     if(this.userData.idNumber){
                //         if(this.userData.password && this.userData.password.length >= 5){
                //             if(res.data.code == 200){
                //                 // console.log(res.data.userData)
                //                 this.$store.commit('CHANGE_USERDATA',res.data.userData)
                //                 this.$toast('登录成功')
                //                 setTimeout(() => {
                //                     this.$router.push('/person')
                //                 },1500)
                //             }else{
                //                 this.$toast(res.data.msg)
                //             }
                //         }else{
                //             this.$toast('请正确输入密码')
                //         }
                //     }else{
                //         this.$toast('请输入身份证号')
                //     }
                // })
                
                this.$axios.post('/user/userLogin.do',this.userData).then(res => {
                    if(this.userData.id_card){
                        if(this.userData.password && this.userData.password.length >= 5){
                            if(res.data.code == 1){
                                // console.log(res)
                                this.$store.commit('CHANGE_USERDATA',res.data.data)
                                this.$store.commit('CHANGE_TOKEN',res.data.token)
                                this.$toast('登录成功')
                                setTimeout(() => {
                                    this.$router.push('/person')
                                },1500)
                            }else{
                                this.$toast(res.data.msg)
                            }
                        }else{
                            this.$toast('请正确输入密码')
                        }
                    }else{
                        this.$toast('请输入身份证号')
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">
.login-content{
    .content-logo{
        width: 4rem;
        margin: 30px auto;
        img{
            width: 100%;
        }
    }
}
.login-form{
    width: 6rem;
    margin: 0 auto;
    font-size: 12px;
    .form-input{
        border: 1px solid #ff0;
        background: #c50206;
        width: 100%;
        margin-bottom: 10px;
        border-radius: 5px;
        color: #fff;
        height: 0.8333333rem;
        padding: 0 5px;
    }
}
::-webkit-input-placeholder{/*Webkit browsers*/
    color:#fff;
    font-size:12px;
}
.register{
    padding-top: 10px;
    width: 6rem;
    font-size: 14px;
    margin: 0 auto;
    color: #fff;
}

</style>