<template>
    <div>
        <Header>积分明细</Header>
        <div class="h44"></div>
        <div>
            <div class="list">
                <div class="item clearfix">
                    <div class="item-left">
                        <div class="item-name">互动发帖</div>
                        <div class="item-time">2018-10-17 21:15:41</div>
                    </div>
                    <div class="item-right">+0.1</div>
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
.list{
    padding-top: 1px;
    padding-bottom: 1px;
    .item{
        border: 1px solid #ddd;
        color: #444;
        position: relative;
        z-index: 2;
        margin: -1px;
        padding: 16px;
        font-size: 16px;
        .item-left{
            float: left;
            .item-name{
                font-size: 18px;
                margin-bottom: 5px;
                color: #333;
            }
            .item-time{
                font-size: 14px;
            }
        }
        .item-right{
            float: right;
            color: red;
        }
    }
}
</style>