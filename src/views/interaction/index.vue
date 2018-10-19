<template>
    <div>
        <Header>党员云互动</Header>
        <div class="h44"></div>
        <div style="background-color: #efeff4;">
            <ul>
                <li v-for="(item, index) in data" :key="index" class="item">
                    <div style="height:46px;" class="clearfix">
                        <div class="touxiang">
                            <img :src="item.header" alt="">
                        </div>
                        <div class="top-center">
                            <div class="nickname">{{item.username}}</div>
                            <div class="time">
                                <i class="iconfont">&#xe62c;</i>
                                <span>{{item.currentTime}}</span>
                                <i class="iconfont">&#xe62d;</i>
                                <span>公开</span>
                            </div>
                        </div>
                        <div class="top-right">党员互动</div>
                    </div>
                    <div class="middle-content">{{item.content}}</div>
                    <div>
                        <span class="response">
                            <i class="iconfont">&#xe62b;</i>
                            <span @click="handleReply(item.forumId,item.header,item.username,item.currentTime,item.content)">回复</span>
                        </span>
                    </div>
                </li>
            </ul>
        </div>
        <div @click="controlShowTwo" v-if="isShow" class="publishWrap"></div>
        <form v-if="isShow" class="publishForm" action="">
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <mt-button style="float:left" type="danger" size="small">发布</mt-button>
            <mt-button @click="controlShowTwo" style="float:right" size="small">取消</mt-button>
        </form>
        <div v-else @click="controlShowOne" class="jiahao">
            <i class="iconfont icon">&#xe649;</i>
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
                data:[],
                commonSetting:{
                    page:1,
                    rows:10,
                    type:0,
                    cates:0
                },
                isShow:false
            }
        },
        methods: {
            getCommonData () {
                this.$axios.get('/forum/forumList.do',this.commonSetting).then(res => {
                    console.log(res.data.rows)
                    this.data = res.data.rows
                })
            },
            controlShowOne () {
                this.isShow = true
            },
            controlShowTwo () {
                this.isShow = false
            },
            handleReply (id,img,username,time,content) {
                this.$router.push({
                    name:'interactionReply',
                    params:{
                        forumId:id,
                        userInfo:{
                            img,
                            username,
                            time,
                            content
                        }
                    }
                })
            }
        },
        created () {
            this.getCommonData()
        }
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
        img{
            height: 33.33px;
            width: 0.66666rem;
        }
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
.jiahao{
    position: fixed;
    right: 10px;
    bottom: 70px;
    z-index: 999999;
    .icon{
        color: red;
        font-size: 56px;
    }
}
.publishWrap{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 998;
    background: rgba(0,0,0,.5);
}
.publishForm{
    width: 100%;
    position: fixed;
    bottom: 0;
    padding: 10px;
    background: #f1f1f1;
    z-index: 999;
    textarea{
        width: 100%;
        height: 100px;
        border-radius: 3px;
        padding: 4px;
        margin-bottom: 10px;
    }
}
</style>