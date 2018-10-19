<template>
    <div>
        <Header>个人量化积分</Header>
        <div class="h44"></div>
        <div>
            <div class="score-img">
                <img src="../../public/imgs/切图/jifen.png" alt="">
                <span>{{this.$store.state.userData.totalScore}}</span>
            </div>
            <router-link to="/scoreDetail">
                <div class="score-item">
                    <img class="img-one" src="../../public/imgs/切图/lxjf.png">
                    积分明细
                    <img class="img-two" src="../../public/imgs/person/我的党建_iPhone_assets/形状-7-拷贝-5.png">
                </div>
            </router-link>
            <div class="score-ruler">
                <span class="ruler-span">积分规则</span>
                <span class="ruler-img">
                    <img src="../../public/imgs/切图/wenhao.png" alt="">
                </span>
            </div>
            <div class="ruler-list">
                <div class="list-item">
                    <span class="item-left">登录APP</span>
                    <span class="item-right">5</span>
                </div>
                <div class="list-item">
                    <span class="item-left">完善个人信息</span>
                    <span class="item-right">2</span>
                </div>
                <div class="list-item">
                    <span class="item-left">查看积分</span>
                    <span class="item-right">1</span>
                </div>
                <div class="list-item">
                    <span class="item-left">按时缴纳党费</span>
                    <span class="item-right">10</span>
                </div>
                <div class="list-item">
                    <span class="item-left">查看通知</span>
                    <span class="item-right">2</span>
                </div>
                <div class="list-item">
                    <span class="item-left">了解学院动态工作</span>
                    <span class="item-right">5</span>
                </div>
                <div class="list-item">
                    <span class="item-left">上交思想汇报经审核通过</span>
                    <span class="item-right">5</span>
                </div>
                <div class="list-item">
                    <span class="item-left">主动学习相关文件</span>
                    <span class="item-right">10</span>
                </div>
                <div class="list-item">
                    <span class="item-left">认真撰写心得总结并上交，经审核通过</span>
                    <span class="item-right">5</span>
                </div>
                <div class="list-item">
                    <span class="item-left">提交个人总结，并参与评议</span>
                    <span class="item-right">2</span>
                </div>
                <div class="list-item">
                    <span class="item-left">积极参与互动</span>
                    <span class="item-right">5</span>
                </div>
                <div class="list-item">
                    <span class="item-left">学习党建知识</span>
                    <span class="item-right">5</span>
                </div>
                <div class="list-item">
                    <span class="item-left">学习党史</span>
                    <span class="item-right">10</span>
                </div>
                <div class="list-item">
                    <span class="item-left">创先争优事迹</span>
                    <span class="item-right">10</span>
                </div>
                <div class="list-item">
                    <span class="item-left">学党章，学习近平总书记系列讲话</span>
                    <span class="item-right">10</span>
                </div>
                <div class="list-item">
                    <span class="item-left">用镜头记录两学一做过程中令人感动的人和事</span>
                    <span class="item-right">3</span>
                </div>
                <div class="list-item">
                    <span class="item-left">关注并积极参与特色活动</span>
                    <span class="item-right">5</span>
                </div>
                <div class="list-item">
                    <span class="item-left">制度化、常态化建设</span>
                    <span class="item-right">5</span>
                </div>
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
    }
</script>

<style scoped lang="less">
.score-img{
    width: 100%;
    position: relative;
    font-size: 12px;
    img{
        width: 100%;
    }
    span{
        font-size: 16px;
        position: absolute;
        top: 50%;
        left: 50%;
        color: white;
        transform: translate(-50%, -50%);
    }
}
.score-item{
    color: #666;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    position: relative;
    z-index: 2;
    padding: 15.5px;
    font-size: 16px;
    padding-right: 54px;
    padding-left: 54px;
    .img-one{
        padding: 10px 0;
        align-items: center;
        position: absolute;
        top: 0;
        left: 11px;
        height: 100%;
    }
    .img-two{
        padding: 20px 0;
        align-items: center;
        position: absolute;
        top: 0;
        right: 11px;
        height: 100%;
    }
}
.score-ruler{
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    background-color: #eee;
    color: #444;
    position: relative;
    z-index: 2;
    padding: 16px;
    .ruler-span{
        position: absolute;
        top: 0;
        left: 11px;
        font-size: 14px;
        height: 32px;
        line-height: 32px;
    }
    .ruler-img{
        align-items: center;
        position: absolute;
        top: -4px;
        right: 11px;
        font-size: 32px;
        height: 32px;
        line-height: 32px;
    }
}
.ruler-list{
    .list-item{
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        position: relative;
        z-index: 2;
        padding: 16px;
        .item-left{
            font-size: 14px;
            color: rgb(153, 153, 153);
            position: absolute;
            left: 11px;
            top: 0;
            height: 34px;
            line-height: 34px;
        }
        .item-right{
            font-size: 14px;
            color: red;
            position: absolute;
            right: 11px;
            top: 0;
            height: 34px;
            line-height: 34px;
        }
    }
}
</style>