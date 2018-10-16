<template>
    <div>
        <Header>党员云互动</Header>
        <div style="background-color: #efeff4;">
            <ul>
                <li class="item">
                    <div style="height:46px;" class="clearfix">
                        <div class="touxiang">
                            <img src="./头像.png" alt="">
                        </div>
                        <div class="top-center">
                            <div class="nickname">刘溢思</div>
                            <div class="time">
                                <i></i>
                                <span>2018-07-01 08:55:50</span>
                                <i></i>
                                <span>公开</span>
                            </div>
                        </div>
                        <div class="top-right">党员互动</div>
                    </div>
                    <div class="middle-content">信仰，节日快乐!</div>
                    <div>
                        <span class="response">
                            <i></i>
                            <span>回复</span>
                        </span>
                    </div>
                </li>
            </ul>
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
.item{
    margin-bottom: 10px;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    color: #444;
    position: relative;
    z-index: 2;
    display: block;
    margin: -1px;
    padding: 16px;
    font-size: 16px;
    height: 141px;
    margin-bottom: 12px;
    .touxiang{
        width: .6666666rem;
        height: .66666666rem;
        border-radius: 50%;
        overflow: hidden;
        float: left;
    }
    .top-center{
        margin-left: 10px;
        margin-top: 0;
        margin-bottom: 5px;
        float: left;
        .nickname{
            font-size: 18px;
            color: #333;
        }
        .time{
            font-size: 12px;
        }
    }
    .top-right{
        font-size: 12px;
        padding: 2px 8px;
        color: red;
        border: 1px solid red;
        border-radius: 15%;
        height: 26px;
        float: right;
    }
    .middle-content{
        padding: 10px 0;
    }
    .response{
        float: right;
        span{
            font-size: 14px;
            vertical-align: text-bottom;
        }
    }
}
</style>