<template>
    <div>
        <Header>修改密码</Header>
        <div class="scroll-content">
            <form class="login-form" action="">
                旧密码：
                <input type="password">
                新密码：
                <input type="password">
                确认密码：
                <input type="password">
                <mt-button style="background-color:#ef473a; height:47px;" size="large" type="danger">确定</mt-button>
            </form>
        </div>
    </div>
</template>

<script>
    import Header from '../../components/header'
    export default {
        components:{
            Header
        },
    }
</script>

<style scoped lang="less">
.scroll-content{
    background: white;
    .login-form{
        width: 6rem;
        margin: 50px auto 0;
        font-size: 14px;
        color: #666;
        input{
        width: 100%;
        margin-bottom: 10px;
        border-radius: 5px;
        color: #666;
        height: 0.8333333rem;
        margin-top: 10px;
        border: 1px solid #999!important;
        padding: 0 5px;
        line-height: 16px;
        display: block;
        outline-style: none;
        }
    }
}
</style>