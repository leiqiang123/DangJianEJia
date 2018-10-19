<template>
    <div>
        <Header>掌上组织生活</Header>
        <div class="h44"></div>
        <div class="middle-img">
            <img src="../../public/imgs/切图/timg.jpg" alt="">
        </div>
        <div class="middle-mune">
            <router-link :to="{path:'/newseye',query:{typeId:type,title:'政治学习'}}">
                <div class="item">
                    <img src="../../public/imgs/切图/icon1.png" alt="">
                    <div>政治学习</div>
                </div>
            </router-link>
            <div @click="handleJumpOne" class="item">
                <img src="../../public/imgs/切图/icon2.png" alt="">
                <div>思想汇报</div>
            </div>
            <div @click="handleJumpTwo" class="item">
                <img src="../../public/imgs/切图/icon3.png" alt="">
                <div>心得总结</div>
            </div>
            <router-link to="">
                <div class="item">
                    <img src="../../public/imgs/切图/icon4.png" alt="">
                    <div>民主评议</div>
                </div>
            </router-link>
            <router-link to="/findOrgMap">
                <div class="item">
                    <img src="../../public/imgs/切图/icon5.png" alt="">
                    <div>流动党员找组织</div>
                </div>
            </router-link>
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
                type:8
            }
        },
        methods: {
            handleJumpOne () {
                this.$router.push({path: '/auditStatus', query: {title: '思想汇报' }})
            },
            handleJumpTwo () {
                this.$router.push({path: '/auditStatus', query: {title: '心得总结' }})
            }
        }
    }
</script>

<style scoped lang="less">
.middle-img{
    width: 100%;
    img{
        width: 100%;
        height: 186.13px;
    }
}
.middle-mune{
    width: 100%;
    .item{
        width: 33.333333%;
        text-align: center;
        padding: 15px 20px;
        font-size: 14px;
        color: #666;
        float: left;
        img{
            width: 100%;
            margin-bottom: 5px;
        }
    }
}
</style>