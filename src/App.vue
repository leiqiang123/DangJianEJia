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
  clear: both;
  overflow: hidden;
}
a{
  text-decoration: none;
  color: #666;
}
ul{
  list-style: none;
}
</style>
