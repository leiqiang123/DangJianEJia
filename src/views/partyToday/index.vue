<template>
    <div>
        <Header>党史上的今天</Header>
        <div class="h44"></div>
        <div v-html="data" class="today-content"></div>
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
                data:''
            }
        },
        methods: {
            getData () {
                var date = new Date();
                var month = date.getMonth()+1;
                var day = date.getDate();
                var url = '';
                this.$axios.get('/proxy/proxy.do?url=http:%2F%2Fcpc.people.com.cn%2FGB%2F64162%2F64165%2F70486%2F70505%2Findex.html').then(res => {
                    // /proxy/proxy.do?url=http:%2F%2Fcpc.people.com.cn%2FGB%2F64162%2F64165%2F70486%2F70506%2Findex.html
                    var cheerio = require('cheerio')
                    var $ = cheerio.load(res.data)
                    let a = $('.p1_02').html()
                    this.data = a
                })
            }
        },
        created () {
            this.getData()
        }
    }
</script>

<style scoped lang="less">
.today-content{
    padding: 10px;
    /deep/ h1{
        font-size: 24px;
        margin-bottom: 10px;
        font-weight: 500;
    }
    /deep/ h2{
        font-size: 20px;
        margin-bottom: 10px;
        font-weight: 500;
    }
    /deep/ p{
        line-height: 2;
        margin: 0 0 10px;
        font-size: 14px;
    }
}
</style>