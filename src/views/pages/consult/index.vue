<template>
  <div class="consult">
      <div class="wrap">
          <div class="consult_carousel">
                <el-carousel type="card" height="400px" :autoplay="false" trigger="click" @change="handleChange" arrow="never">
                    <el-carousel-item v-for="(item,index) in pics" :key="index" :label="item.name">
                        <img style="width:386px;height:386px" v-if="index === chooseIndex" class="pic" :src="item.pic" alt="">
                        <img style="width:370px;height:370px" v-else class="pic" :src="item.default" alt="">
                    </el-carousel-item>
                </el-carousel>
          </div>
          <div class="btn">
              立即咨询
          </div>
      </div>
  </div>
</template>

<script>
import pic1 from '../../../assets/image/consult/carousel1.png'
import pic11 from '../../../assets/image/consult/default1.png'
import pic2 from '../../../assets/image/consult/carousel2.png'
import pic22 from '../../../assets/image/consult/default2.png'
import pic3 from '../../../assets/image/consult/carousel3.png'
import pic33 from '../../../assets/image/consult/default3.png'
export default {
    name: 'consult',
    data () {
        return {
            chooseIndex: 0,
            pics: [
                { name: '金融咨询', pic: pic1, default: pic11 },
                { name: '法律咨询', pic: pic2, default: pic22 },
                { name: '信息咨询', pic: pic3, default: pic33 }
            ]
        }
    },
    created () {

    },
    methods: {
        handleChange (index) {
            this.chooseIndex = index
        }
    }
}
</script>

<style lang='scss' scoped>
.consult{
    padding-top: 140px;
    .consult_carousel{
        width: 110%;
        text-align: center;
    }
    .btn{
        margin: 40px auto 10px;
        width: 121px;
        height: 36px;
        line-height: 36px;
        color: #fff;
        background: linear-gradient(134.01deg, #FD7082 -1.78%, #DB2D43 100%);
        text-align: center;
        border-radius: 2px;
        cursor: pointer;
    }
}
</style>
<style lang='scss'>
.consult{
    .consult_carousel{
        .el-carousel--horizontal{
            overflow: visible;
            padding-right: 236px;
        }
        .el-carousel__mask{
            width: 0;
        }
        .el-carousel__indicators--outside{
            position: absolute;
            top: -80px;
            height: 45px;
            border-bottom: 1px solid #BDBDBD;
            width: 1200px;
        }
        .el-carousel__indicators--outside button{
            background-color: #fff;
            font-size: 16px;
            color: #333;
            padding-bottom: 14px;
        }
        .el-carousel__indicators--outside button{
            opacity: 1;
        }
        .el-carousel__indicator.is-active button{
            color: $mainColor;
            border-bottom: 3px solid $mainColor;
            padding-bottom: 14px;
        }
    }
}
</style>
