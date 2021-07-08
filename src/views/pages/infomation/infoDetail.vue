<template>
  <div class="infoDetail">
      <div class="wrap">
          <div class="hander">
            <div class="bread_txt">当前位置：</div>
            <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/infomation/list' }">产业资讯动态</el-breadcrumb-item>
                <el-breadcrumb-item>资讯详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="title">资讯详情页</div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.infoDetail{
    .wrap{
        .title{
            width: 1200px;
            box-sizing: border-box;
            height: 51px;
            background-color: #fff;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            line-height: 51px;
            border-left: 9px solid #F94C15;
            padding-left: 20px;
            margin-bottom: 20px;
        }
    }
}
</style>
