<template>
    <div>
        <Header>修改个人信息</Header>
        <div class="edit" @click="handleSave">保存</div>
        <div class="h44"></div>
        <div>
            <form action="">
                <div class="item">
                    <span class="item-left">头像</span>
                    <!-- <input class="item-right" type="text"> -->
                    <Upload class="item-upload" v-on:change="change" :value="header"></Upload>
                </div>
                <div class="item">
                    <span class="item-left">姓名</span>
                    <input class="item-right" :disabled="isEdit" type="text" v-model="userInfo.username">
                </div>
                <div class="item">
                    <span class="item-left">身份证</span>
                    <input class="item-right" disabled type="text" v-model="idCard">
                </div>
                <div class="item">
                    <span class="item-left">家庭住址</span>
                    <input class="item-right" :disabled="isEdit" type="text" v-model="userInfo.hometown">
                </div>
                <div class="item">
                    <span class="item-left">工作地址</span>
                    <input class="item-right" :disabled="isEdit" type="text" v-model="userInfo.address">
                </div>
                <div class="item">
                    <span class="item-left">民族</span>
                    <input class="item-right" :disabled="isEdit" type="text" v-model="userInfo.nation">
                </div>
                <div class="item">
                    <span class="item-left">微信号</span>
                    <input class="item-right" :disabled="isEdit" type="text" v-model="userInfo.wxNum">
                </div>
                <div class="item">
                    <span class="item-left">qq号</span>
                    <input class="item-right" :disabled="isEdit" type="text" v-model="userInfo.qqNum">
                </div>
                <div class="item">
                    <span class="item-left">性别</span>
                    <!-- <input class="item-right" type="text" v-model="neirong"> -->
                    <span class="item-right">
                        <input type="radio" :checked="userInfo.sex == 1 ? 'checked' : ''" name="sex" value="1">男
                        <input type="radio" :checked="userInfo.sex == 0 ? 'checked' : ''" name="sex" value="0">女
                        <!-- <input class="item-radio" type="radio" value="女"> -->
                    </span>
                </div>
                <div class="item">
                    <span class="item-left">最高学历</span>
                    <input class="item-right" type="text" v-model="userInfo.education">
                </div>
                <div class="item">
                    <span class="item-left">职称</span>
                    <input class="item-right" type="text" v-model="userInfo.jobRank">
                </div>
                <div class="item">
                    <span class="item-left">薪资水平</span>
                    <input class="item-right" type="text" v-model="userInfo.salary">
                </div>
                <div class="item">
                    <span class="item-left">入党时间</span>
                    <mt-field class="item-time-select" v-model="userInfo.joinPartyTime" type="date"></mt-field>
                </div>
                <div class="item">
                    <span class="item-left">党费最后缴纳时间</span>
                    <mt-field class="item-time-select" v-model="userInfo.lastPayTime" type="date"></mt-field>
                </div>
                <div class="item">
                    <span class="item-left">当前身份</span>
                    <select class="item-select" v-model="userInfo.partyStatus">
                        <option value="0">党员</option>
                        <option value="1">预备党员</option>
                        <option value="2">积极份子</option>
                    </select>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import Header from '../../components/header'
    import Upload from '../../components/upload'
    export default {
        components:{
            Header,
            Upload
        },
        data () {
            return {
                userInfo:{
                    sex:'',
                    username: 'test1',
                    hometown: 'jtzz',
                    address: 'gzdz',
                    nation: '汉',
                    wxNum: '123456',
                    qqNum: '1111112',
                    education: '3111111',
                    jobRank: 'test',
                    salary: '18000',
                    joinPartyTime: '1999-01-25',
                    lastPayTime: '2011-01-01',
                    partyStatus: '1',
                },
                isEdit:false,
                idCard:'',
                header:''
            }
        },
        methods: {
            getUserInfo () {
                this.$axios.get('/user/userInfo.do').then(res => {
                    console.log(res)
                    if(res.data.code == 1){
                        // this.userInfo = res.data.data
                        this.userInfo.sex = res.data.data.sex
                        this.userInfo.username = res.data.data.username
                        this.userInfo.hometown = res.data.data.hometown
                        this.userInfo.address = res.data.data.address
                        this.userInfo.nation = res.data.data.nation
                        this.userInfo.wxNum = res.data.data.wxNum
                        this.userInfo.qqNum = res.data.data.qqNum
                        this.userInfo.education = res.data.data.education
                        this.userInfo.jobRank = res.data.data.jobRank
                        this.userInfo.salary = res.data.data.salary
                        this.userInfo.joinPartyTime = res.data.data.joinPartyTime
                        this.userInfo.lastPayTime = res.data.data.lastPayTime
                        this.userInfo.partyStatus = res.data.data.partyStatus
                        this.idCard = res.data.data.idCard
                        this.header = res.data.data.header
                    }
                })
            },
            handleSave () {
                let obj = document.getElementsByName('sex')
                for(var i=0; i<obj.length; i++){
                    if(obj[i].checked){
                        this.userInfo.sex = obj[i].value
                    }
                }
                // console.log(this.userInfo)
                this.$axios.post('/user/modifyInfo.do',this.userInfo).then(res => {
                    // console.log(res)
                    if(res.data.code == 1){
                        this.$router.push('/personDetail')
                        this.$toast('保存成功')
                    }else{
                        this.$toast('保存失败')
                    }
                })
            },
            change (e) {
                console.log(e)
                this.userInfo.header = e
            }
        },
        created () {
            this.getUserInfo()
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
    border: 1px solid #ddd;
    color: #444;
    position: relative;
    z-index: 2;
    display: block;
    margin: -1px;
    padding: 16px;
    font-size: 16px;
    overflow: hidden;
    .item-left{
        font-size: 14px;
        position: absolute;
        left: 11px;
    }
    .item-right{
        position: absolute;
        right: 11px;
        font-size: 14px;
    }
    .item-upload{
        position: absolute;
        right: 11px;
        top: 0;
        font-size: 14px;
        height: 0.98rem;
        height: 48px;
    }
    input{  
	background:none;  
	outline:none;  
    border:0px;
    text-align: right;
    }
    .item-radio{
        position: absolute;
        right: 22px;
        font-size: 14px;
    }
    .item-time-select{
        position: absolute;
        right: -28px;
        font-size: 14px;
        top: 1px;
        color: #444;
    }
    .item-select{
        position: absolute;
        top: 0;
        bottom: 0;
        right: -28px;
        padding: 0 48px 0 16px;
        max-width: 65%;
        border: none;
        background: #fff;
        color: #333;
        text-indent: .01px;
        white-space: nowrap;
        font-size: 14px;
        cursor: pointer;
        // direction: rtl;
        text-transform: none;
        outline-offset: 0;
        outline-style: none;
        outline-width: 0;
    }
}
</style>