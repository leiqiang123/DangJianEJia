<template>
    <div style="height:100vh; position:relative;">
        <Header>掌上组织生活</Header>
        <div class="h44"></div>

        <div class="choice-wrap">
            <div class="choice-btn">
                <div class="choice-person">
                    <mt-button class="mt-btn" type="danger" @click="jumpSummary">个人总结</mt-button>
                </div>
                <div>
                    <mt-button class="mt-btn" type="danger">民主评议</mt-button>
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
        methods: {
            jumpSummary() {
                this.$router.push('/personSummary')
            }
        }
    }
</script>

<style scoped lang="less">
.choice-wrap{
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    width: auto;
    height: 625px;
    .choice-btn{
        position: absolute;
        top: 40%;
        left: 25%;
        width: 100%;
        transform: translateY(-50%);
        .choice-person{
            margin-bottom: 30px;
        }
    }
}
.mt-btn{
    width: 3.95rem;
    height: 57px;
    font-size: 16px;
}
</style>