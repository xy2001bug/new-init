<template>
  <div class="technologyDetail">
      <div class="wrap">
        <div class="hander">
            <div class="bread_txt">当前位置：</div>
            <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>技术开发需求对接</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/development/technology' }">找技术</el-breadcrumb-item>
                <el-breadcrumb-item>技术详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="title">技术详情</div>
        <div class="con">
            <div class="row">
                <div class="lable">技术名称</div>
                <div class="value">一种卡死啥奖励垃圾啊</div>
            </div>
            <div class="row">
                <div class="lable">拟投资规模</div>
                <div class="value">20-200万</div>
            </div>
            <div class="row">
                <div class="lable">行业领域</div>
                <div class="value">其他</div>
            </div>
            <div class="row">
                <div class="lable">合作方式</div>
                <div class="value">技术转让, 许可生产, 合作开发, 其他</div>
            </div>
            <div class="row">
                <div class="lable">技术介绍</div>
                <div class="value">企业目前使用传统的模具成型方法进行船模开发，但是在成型过程中，出来的成品会出现各种问题，而3D打印不切实际船模，体积太庞大，不切实际，因此寻求快速成型成本低的模具。</div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.technologyDetail{
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
        .con{
            padding: 40px 30px;
            background-color: #fff;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            font-size: 14px;
            .row{
                margin-bottom: 25px;
                display: flex;
                line-height: 21px;
                .lable{
                    width: 100px;
                    font-weight: bold;
                }
                .value{
                    color: #666;
                    width: 540px;
                }
            }
        }
    }
}
</style>
