<template>
  <div class="expertDetail">
      <div class="wrap">
        <div class="hander">
            <div class="bread_txt">当前位置：</div>
            <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/expert/expertList' }">专家人才库</el-breadcrumb-item>
                <el-breadcrumb-item >专家详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="title">
            专家信息
        </div>
        <div class="con">
            <div class="left">
                <img src="@/assets/image/expert/expert_pic.png" alt="">
            </div>
            <div class="right">
                <div class="name">
                    张大炮
                </div>
                <div class="con_box">
                    <div class="row">
                        <div class="lable">技术职称：</div>
                        <div class="value">副教授</div>
                    </div>
                    <div class="row">
                        <div class="lable">行业领域：</div>
                        <div class="value">新彩礼和护工</div>
                    </div>
                </div>
                <div class="con_box">
                    <div class="row">
                        <div class="lable">研究方向：</div>
                        <div class="value">副教授</div>
                    </div>
                    <div class="row">
                        <div class="lable">广州单位：</div>
                        <div class="value">副教授</div>
                    </div>
                </div>
                <div class="row row3">
                    <div class="lable">个人介绍：</div>
                    <div class="value value3">基于网络环境的企业集成化管理，区域发展规划和企业基于网络环境的企业集成化管理，区域发展规划和企业基于网络环境的企业集说的就...集成化管理，区域发展规划和企业基于网络环境的企业集成化管理，区域发展规划和企业基于网络环境的企业集说的就...集成化管理</div>
                </div>
                <div class="btn">
                    立即咨询
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'expertDetail'
}
</script>

<style lang='scss' scoped>
.expertDetail{
    padding-bottom: 50px;
    .wrap{
        .title{
            box-sizing: border-box;
            width: 1200px;
            height: 50px;
            margin-bottom: 20px;
            border-left: 9px solid #F94C15;
            padding-left: 20px;
            font-size: 16px;
            line-height: 50px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        .con{
            box-sizing: border-box;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            height: 600px;
            width: 1200px;
            padding: 20px;
            display: flex;
            font-size: 14px;
            .left{
                > img{
                    width: 211px;
                    height: 284px;
                    margin-right: 70px;
                }
            }
            .right{
                .name{
                    line-height: 40px;
                    margin-bottom: 20px;
                    font-size: 20px;
                    font-weight: bold;
                }
                .con_box{
                    display: flex;
                    flex-wrap: wrap;
                }
                .row{
                    display: flex;
                    margin-bottom: 15px;
                    line-height: 21px;
                    width: 300px;
                    flex-wrap: wrap;
                    .lable{
                        width: 80px;
                        color: #999;
                    }
                    .value{
                        flex: 1;
                    }
                }
                .row3{
                    width: 850px;
                    .value3{
                        width: 755px;
                        text-overflow: -o-ellipsis-lastline;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                        line-clamp: 3;
                        -webkit-box-orient: vertical;
                    }
                }
                .btn{
                    margin-top: 40px;
                    margin-left: 80px;
                    width: 126px;
                    height: 38px;
                    text-align: center;
                    line-height: 38px;
                    color: #fff;
                    cursor: pointer;
                    border-radius: 2px;
                    background: linear-gradient(134.01deg, #FD7082 -1.78%, #DB2D43 100%);
                }
            }
        }
    }
}
</style>
