<template>
    <div style="background-color: #c50206; height:100vh;">
        <Header>登录</Header>
        <div class="login-content">
            <div class="content-logo">
                <img src="../../public/imgs/login/logo.png" alt="">
            </div>
        </div>
        <form action="" class="login-form">
            <input class="form-input" type="text" placeholder="身份证号">
            <input class="form-input" type="password" placeholder="密码">
            <mt-button style="width:100%; font-size:14px;" type="danger">登录</mt-button>
        </form>
    </div>
</template>

<script>
    import Header from '../../components/header'
    export default {
        components:{
            Header
        },
        methods: {
            backPage () {
                history.go(-1)
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
</style>