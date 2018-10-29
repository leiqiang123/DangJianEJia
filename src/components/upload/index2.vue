<template>
  <div>
    <div id="conent">
      <div class="container">
        <label id="btn-wrap">
          <input type="file" name="file" accept="image/jpeg,image/png,image/jpg" @change="up" id="file-input">
          <img :src="currentValue" v-if="currentValue">
          <i class="el-icon-plus" v-if="!currentValue"></i>
        </label>
      </div>
      <!-- <div class="item-img">
      </div>
      <div id="xiugai2">
      </div> -->
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    props:{
      value:{
        type:[String]
      }
    },
    data() {
      return {
        token: '',
        currentValue:this.value,
      }
    },
    methods: {
        up (E) {
          var file = E.target.files[0]
          var fileReader = new FileReader()
          fileReader.readAsDataURL(file)
          let that = this
          fileReader.onload = function () {
              that.currentValue = this.result
              // console.log(this.result)
              var imgBase64Data = this.result.split(',')[1]
              // console.log(imgBase64Data)
              that.$axios.post('/image/uploadBase64.do',{myFile: imgBase64Data}).then(res => {
                  console.log(res)
                  that.$emit('change', res.data.url)
              })
          }
        }
    },
    watch:{
      value(val){
        this.currentValue = val
      }
    }
  }
</script>

<style scoped>
  .item-img {
    text-align: center;
  }
  #file-input {
    display: none;
  }
  #btn-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 4px;
    border: 1px solid #bbb;
    margin: 20px 0 15px 20px;
  }
  #btn-wrap img {
    z-index: 998;
    height: 100px;
    width: 100px;
  }
  .el-icon-plus {
    height: 100%;
    width: 100%;
    font-size: 40px;
    color: #2d3a4b;
    /* font-weight: 400; */
    background: url(./上传.png);
    background-size:100px;
  }
</style>