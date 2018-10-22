<template>
    <div>
        <div id="conent">
        <div class="container">
            <label id="btn-wrap">
                <input type="file" name="file" accept="image/jpeg,image/png,image/jpg" @change="up" id="file-input">
                <img :src="currentValue">
                <!-- <i class="el-icon-plus" v-if="!currentValue"></i> -->
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
    export default {
        props:{
            value:{
                type:[String]
            }
        },
        data () {
            return {
                currentValue:this.value
            }
        },
        methods:{
            up (E) {
                var file = E.target.files[0]
                var fileReader = new FileReader()
                fileReader.readAsDataURL(file)
                let that = this
                fileReader.onload = function () {
                    that.currentValue = this.result
                    var imgBase64Data = this.result.substring(23)
                    that.$axios.post('/image/uploadBase64.do',{myFile: imgBase64Data}).then(res => {
                        console.log(res)
                        that.$emit('change', res.data.url)
                    })
                }
            }
        },
        watch: {
            value (val) {
                this.currentValue = val
            }
        }
    }
</script>

<style scoped lang="less">
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
    width: 0.98rem;
    height: 48px;
    border-radius: 4px;
    // border: 1px dashed #bbb;
    // margin: 20px 0 15px 30px;
}
#btn-wrap img {
    z-index: 998;
    width: 0.98rem;
    height: 48px;
    padding: 10px 0;
}
.el-icon-plus {
    // font-size: 40px;
    color: #2d3a4b;
    font-weight: 400;
}
</style>