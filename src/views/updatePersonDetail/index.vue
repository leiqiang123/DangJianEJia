<template>
    <div>
        <Header>修改个人信息</Header>
        <div class="edit">保存</div>
        <div class="h44"></div>
        <div>
            <form action="">
                <div class="item">
                    <span class="item-left">头像</span>
                    <input class="item-right" type="text" v-model="neirong">
                </div>
                <div class="item">
                    <span class="item-left">姓名</span>
                    <input class="item-right" :disabled="isEdit" type="text" v-model="neirong">
                </div>
                <div class="item">
                    <span class="item-left">身份证</span>
                    <input class="item-right" disabled type="text" v-model="neirong">
                </div>
                <div class="item">
                    <span class="item-left">家庭住址</span>
                    <input class="item-right" :disabled="isEdit" type="text" v-model="neirong">
                </div>
                <div class="item">
                    <span class="item-left">工作地址</span>
                    <input class="item-right" :disabled="isEdit" type="text" v-model="neirong">
                </div>
                <div class="item">
                    <span class="item-left">民族</span>
                    <input class="item-right" :disabled="isEdit" type="text" v-model="neirong">
                </div>
                <div class="item">
                    <span class="item-left">微信号</span>
                    <input class="item-right" :disabled="isEdit" type="text" v-model="neirong">
                </div>
                <div class="item">
                    <span class="item-left">qq号</span>
                    <input class="item-right" :disabled="isEdit" type="text" v-model="neirong">
                </div>
                <div class="item">
                    <span class="item-left">性别</span>
                    <!-- <input class="item-right" type="text" v-model="neirong"> -->
                    <span class="item-right">
                        <input type="radio" checked="checked" name="sex" value="1">男
                        <input type="radio" name="sex" value="0">女
                        <!-- <input class="item-radio" type="radio" value="女"> -->
                    </span>
                </div>
                <div class="item">
                    <span class="item-left">最高学历</span>
                    <input class="item-right" type="text" v-model="neirong">
                </div>
                <div class="item">
                    <span class="item-left">职称</span>
                    <input class="item-right" type="text" v-model="neirong">
                </div>
                <div class="item">
                    <span class="item-left">薪资水平</span>
                    <input class="item-right" type="text" v-model="neirong">
                </div>
                <div class="item">
                    <span class="item-left">入党时间</span>
                    <!-- <input class="item-right" type="text" v-model="neirong"> -->
                    <mt-field class="item-time-select" type="date"></mt-field>
                </div>
                <div class="item">
                    <span class="item-left">党费最后缴纳时间</span>
                    <!-- <input class="item-right" type="text" v-model="neirong"> -->
                    <mt-field class="item-time-select" type="date"></mt-field>
                </div>
                <div class="item">
                    <span class="item-left">当前身份</span>
                    <!-- <input class="item-right" type="text" v-model="neirong"> -->
                    <select class="item-select" name="" id="">
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
    export default {
        components:{
            Header
        },
        data () {
            return {
                neirong:'test1',
                isEdit:false,
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