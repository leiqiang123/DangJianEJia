<template>
    <div>
        <Header>个人信息</Header>
        <router-link to="/updatePersonDetail"><div class="edit">编辑</div></router-link>
        <div class="h44"></div>     
        <div>
            <div class="item">
                <span class="icon-left">头像</span>
                <img class="icon-right" :src="userInfo.header" alt="">
            </div>
            <div class="item">
                <span class="icon-left">姓名</span>
                <span class="icon-right">{{userInfo.username}}</span>
            </div>
            <div class="item">
                <span class="icon-left">身份证</span>
                <span class="icon-right">{{userInfo.idCard}}</span>
            </div>
            <div class="item">
                <span class="icon-left">家庭住址</span>
                <span class="icon-right">{{userInfo.hometown}}</span>
            </div>
            <div class="item">
                <span class="icon-left">工作地址</span>
                <span class="icon-right">{{userInfo.address}}</span>
            </div>
            <div class="item">
                <span class="icon-left">民族</span>
                <span class="icon-right">{{userInfo.nation}}</span>
            </div>
            <div class="item">
                <span class="icon-left">微信号</span>
                <span class="icon-right">{{userInfo.wxNum}}</span>
            </div>
            <div class="item">
                <span class="icon-left">qq号</span>
                <span class="icon-right">{{userInfo.qqNum}}</span>
            </div>
            <div class="item">
                <span class="icon-left">性别</span>
                <span class="icon-right">{{userInfo.sex == 1 ? "男" : "女"}}</span>
            </div>
            <div class="item">
                <span class="icon-left">最高学历</span>
                <span class="icon-right">{{userInfo.education}}</span>
            </div>
            <div class="item">
                <span class="icon-left">职称</span>
                <span class="icon-right">{{userInfo.jobRank}}</span>
            </div>
            <div class="item">
                <span class="icon-left">薪资水平</span>
                <span class="icon-right">{{userInfo.salary}}</span>
            </div>
            <div class="item">
                <span class="icon-left">入党时间</span>
                <span class="icon-right">{{userInfo.joinPartyTime}}</span>
            </div>
            <div class="item">
                <span class="icon-left">党费最后缴纳时间</span>
                <span class="icon-right">{{userInfo.lastPayTime}}</span>
            </div>
            <div class="item">
                <span class="icon-left">当前身份</span>
                <span class="icon-right">{{userInfo.partyIdentity}}</span>
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
                userInfo:{}
            }
        },
        methods: {
            getPersonInfo () {
                this.$axios.get('/user/userInfo.do').then(res => {
                    // console.log(res)
                    if(res.data.code == 1){
                        this.userInfo = res.data.data
                    }
                })
            }
        },
        created () {
            if(this.$store.state.token){
                this.getPersonInfo()
            }else{
                this.$router.push('/login')
            }
        }
    }
</script>

<style scoped lang="less">
.edit{
    color: #fff;
    z-index: 998;
    position: fixed;
    top: 12px;
    right: 6px;
    font-weight: 300;
    font-size: 17px;
    padding-right: 2px;
    padding-left: 2px;
}
.item{
    height: 50px;
    padding-right: 54px;
    padding-left: 54px;
    border: 1px solid #ddd;
    background-color: #fff;
    color: #444;
    position: relative;
    z-index: 2;
    // display: block;
    margin: -1px;
    padding: 16px;
    font-size: 16px;
    .icon-left{
        font-size: 14px;
        position: absolute;
        left: 11px;
        // top: 0;
        align-items: center;
        height: 100%;
    }
    .icon-right{
        font-size: 14px;
        padding: 10px 0px;
        align-items: center;
        position: absolute;
        top: 0;
        right: 11px;
        height: 100%;
        line-height: 24px;
    }
}
</style>