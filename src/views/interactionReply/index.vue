<template>
    <div style="background-color: #efeff4; height:100vh;">
        <Header>党员云互动</Header>
        <div class="h44"></div>
        <div style="background-color: #efeff4;">
            <ul style="margin:10px;">
                <li class="item">
                    <div style="height:46px;" class="clearfix">
                        <div class="touxiang">
                            <img :src="userInfo.img" alt="">
                        </div>
                        <div class="top-center">
                            <div class="nickname">{{userInfo.username}}</div>
                            <div class="time">
                                <i class="iconfont">&#xe62c;</i>
                                <span>{{userInfo.time}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="middle-content">{{userInfo.content}}</div>
                </li>
                <li v-for="(item, index) in commonInfo" :key="index" class="item">
                    <div style="height:46px;" class="clearfix">
                        <div class="touxiang">
                            <img :src="item.header" alt="">
                        </div>
                        <div class="top-center">
                            <div class="nickname">{{item.username}}</div>
                            <div class="time">
                                <i class="iconfont">&#xe62c;</i>
                                <span>{{item.timeFormat}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="middle-content">{{item.comment}}</div>
                </li>
            </ul>
        </div>
        <div class="common-bottom">
            <div class="common-item">
                <label class="item-wrap" for="">
                    <input type="text" placeholder="评论内容">
                </label>
                <div class="item-button">评论</div>
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
                userInfo:{},
                commonSetting:{
                    page:1,
                    rows:10,
                    forum_id:''
                },
                commonInfo:[]
            }
        },
        methods: {
            getCommonData () {
                this.$axios.get('/forum/forumCommentList.do',this.commonSetting).then(res => {
                    // console.log(res.data.rows)
                    this.commonInfo = res.data.rows
                })
            }
        },
        created () {
            // console.log(this.$route.params.userInfo)
            this.userInfo = this.$route.params.userInfo
            this.commonSetting.forum_id = this.$route.params.forumId
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
    height: 120px;
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
    .middle-content{
        padding: 10px 0;
    }
}
.common-bottom{
    color: #666;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding-top: 1px;
    padding-bottom: 1px;
    .common-item{
        padding: 8px;
        display: flex;
        align-items: center;
        border: 1px solid #ddd;
        background-color: #fff;
        color: #444;
        margin: -1px;
        z-index: 2;
        .item-wrap{
            border: 1px solid #c50206;
            background: #fff;
            flex: 1 0;
            border-radius: 4px;
            padding-right: 8px;
            padding-left: 8px;
            display: flex;
            align-items: center;
            font-weight: 400;
            font-size: 14px;
            line-height: 1.42857;
            input{
                width: 100%;
                padding-left: 4px;
                height: 29px;
                background: 0 0;
                line-height: 18px;
                border:none;
                outline:none;
            }
        }
        .item-button{
            background: #c50206;
            color: #fff;
            margin-left: 10.67px;
            padding: 2px 4px 1px;
            min-width: 28px;
            min-height: 30px;
            font-size: 12px;
            line-height: 26px;
            border-radius: 4px;
            vertical-align: top;
            text-align: center;
            text-overflow: ellipsis;
            display: inline-block;
        }
    }
}
</style>