<template>
    <div>
        <Header>{{title}}</Header>
        <div class="h44"></div>
        <div class="middle">
            <div class="middle-logo">
                <img src="../../public/imgs/切图/reviewing.png" alt="">
            </div>
            <div class="statetext">
                正在审核中
            </div>
            <div class="closeBtn" @click="handleClose">关闭</div>
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
                title:''
            }
        },
        methods: {
            handleClose () {
                history.go(-1)
            }
        },
        created () {
            // console.log(this.$route.query.title)
            this.title = this.$route.query.title
        }
    }
</script>

<style scoped lang="less">
.middle{
    font-size: 12px;
    .middle-logo{
        margin-top: 50px;
        text-align: center;
        img{
            width: 1.8333333rem;
        }
    }
    .statetext{
        width: 100%;
        font-size: 14px;
        color: #666;
        text-align: center;
        margin-top: 5.2083333px;
        margin-bottom: 5px;
    }
    .closeBtn{
        width: 60%;
        height: 40px;
        line-height: 40px;
        margin: 0 auto;
        background: #c50206;
        color: #fff;
        margin-top: 100px;
        border-radius: 10px;
        text-align: center;
        font-size: 16px;
    }
}
</style>