<template>
    <div class="head">
        <div class="header clearfix">
            <slot></slot>
        </div>
        <div class="header-icon" @click="backPage"></div>
    </div>
</template>

<script>
    export default {
        methods: {
            backPage () {
                history.go(-1)
            }
        }
    }
</script>

<style scoped>
.head{
    position: fixed;
    top: 0;
    z-index: 998;
}
.header{
    width: 7.5rem;
    height: 44px;
    background: #c50206;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    line-height: 44px;
    position: relative;
}
.header-icon{
    width: 0.25rem;
    height: 0.25rem;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    position: absolute;
    top: 15px;
    left: 15px;
    display: block;
    transform:rotate(45deg);
}
</style>