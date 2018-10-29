<template>
    <div>
        <Header>个人总结</Header>
        <div class="h44"></div>
        <div class="upload">
            <div v-for="(item, index) in array" :key="index">
                <upload v-model="value" v-on:change="changeValue"></upload>
            </div>
        </div>
        <div class="submit">
            <mt-button size="large" type="danger">提交审核</mt-button>
        </div>
    </div>
</template>

<script>
    import Header from '../../components/header'
    import upload from '../../components/upload/index2.vue'
    export default {
        components:{
            Header,
            upload
        },
        data() {
            return {
                value:'',
                array:[1]
            }
        },
        methods: {
            handle() {
                console.log(this.value)
            },
            changeValue(val) {
                console.log(val)
                this.array = this.array.concat([1])
            }
        }
    }
</script>

<style scoped lang="less">
.upload{
    display: flex;
    flex-wrap: wrap;
}
.submit{
    width: 100%;
    position: fixed;
    bottom: 70px;
}
</style>