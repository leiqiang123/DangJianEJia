<template>
    <div>
        <Header>积分明细</Header>
        <div class="h44"></div>
        <div>
            <div class="list">
                <div v-for="(item, index) in scoreData" :key="index" class="item clearfix">
                    <div class="item-left">
                        <div class="item-name">{{item.typeName}}</div>
                        <div class="item-time">{{item.timeFormat}}</div>
                    </div>
                    <div class="item-right">+{{item.singleDesc}}</div>
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
        data () {
            return {
                scoreData:[]
            }
        },
        methods: {
            getScoreData () {
                this.$axios.get('/integral/integralList.do?page=1&rows=10').then(res => {
                    console.log(res.data.rows)
                    this.scoreData = res.data.rows
                })
            }
        },
        created () {
            this.getScoreData()
        }
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