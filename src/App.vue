<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /* font-size: 12px; */
}
.clearfix:after{
  content: '';
  display: block;
  clear: both;
  overflow: hidden;
}
.h44{
  height: 44px;
}
a{
  text-decoration: none;
  color: #666;
}
ul{
  list-style: none;
}
@font-face {
  font-family: 'iconfont';  /* project id 875443 */
  src: url('//at.alicdn.com/t/font_875443_cu30wpmtuvh.eot');
  src: url('//at.alicdn.com/t/font_875443_cu30wpmtuvh.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_875443_cu30wpmtuvh.woff') format('woff'),
  url('//at.alicdn.com/t/font_875443_cu30wpmtuvh.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_875443_cu30wpmtuvh.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.popup{
  width: 2.08rem;
  height: 64px;
  text-align: center;
  line-height: 64px;
  font-size: 20px;
  color: #fff;
  background: rgba(0,0,0,.5);
  border-radius: 6px;
}
</style>
