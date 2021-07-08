<template>
  <div class="require">
      <div class="wrap">
        <div class="hander">
            <div class="bread_txt">当前位置：</div>
            <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/infomation/list' }">专利产业对接</el-breadcrumb-item>
                <el-breadcrumb-item>单位入驻申请说明</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="title">单位入驻申请说明</div>
        <div class="con">
            <div class="con_box">
                <div class="con_title">入驻申请资质</div>
                <div class="con_tip">
                    遵循“开放、有序、公开、公正”的目标，入驻单位按照自愿的原则进行入驻，对所提供的信息和材料的真实性、准确性、合法性负责‘并同意遵守相关监督管理规定。
                </div>
                <div class="con1_box">
                    <div class="con1_item">
                        <div class="con1_num">1</div>
                        <div class="con1_text1">高新技术企业、知识产权服务机构</div>
                    </div>
                    <div class="con1_item">
                        <div class="con1_num">2</div>
                        <div class="con1_text1">单位基本证件，国定相关资质齐全</div>
                    </div>
                    <div class="con1_item">
                        <div class="con1_num">3</div>
                        <div class="con1_text1">非盈利社会团体</div>
                    </div>
                    <div class="con1_item">
                        <div class="con1_num">4</div>
                        <div class="con1_text1">单位属于在经营状态</div>
                    </div>
                </div>
            </div>
            <div class="con_box">
                <div class="con_title">入驻平台优势</div>
                <div class="con2_box">
                    <div class="con2_item">
                        <div class="con2_lable">优势一：大平台</div>
                        <div class="con2_value">专业大平台，政府扶持项目，可靠、放心，入驻无忧</div>
                    </div>
                    <div class="con2_item">
                        <div class="con2_lable">优势二：资源共享</div>
                        <div class="con2_value">平台知产资源共享，增加各单位资源优势</div>
                    </div>
                    <div class="con2_item">
                        <div class="con2_lable">优势三：资源优质</div>
                        <div class="con2_value">资源经过平台层层筛选，大量优质资源，入驻平台享有优先选择权</div>
                    </div>
                    <div class="con2_item">
                        <div class="con2_lable">优势四：资源渠道广</div>
                        <div class="con2_value">对接全国知名知识产权服务平台，资源渠道丰富，资源品类多</div>
                    </div>
                </div>
            </div>
            <div class="con_box">
                <div class="con_title">入驻咨询</div>
                <div class="con3_box">
                    <div class="con3_row">平台全称：东莞市三航军民融合创新研究院</div>
                    <div class="con3_row">联系电话：0769-22890917</div>
                    <div class="con3_row">联系邮箱：sh@dgshyjy.com</div>
                    <div class="con3_row">联系地址：东莞市松山湖总部三路20号中汇世银大厦七楼706-709</div>
                </div>
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
.require{
    padding-bottom: 50px;
    .wrap{
        font-size: 14px;
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
            padding: 0 30px 60px 30px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            .con_box{
                padding-top: 50px;
                .con_title{
                    font-size: 16px;
                    font-weight: bold;
                    margin-bottom: 30px;
                }
                .con_tip{
                    font-size: 14px;
                    color: #666;
                    line-height: 21px;
                    margin-bottom: 20px;
                }
                .con1_box{
                    display: flex;
                    justify-content: space-between;
                    .con1_item{
                        width: 266px;
                        height: 90px;
                        background-color: #F5F9FF;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: space-between;
                        padding: 16px 0;
                        box-sizing: border-box;
                        .con1_num{
                            font-size: 14px;
                            font-weight: bold;
                            border: 1px solid #333333;
                            border-radius: 25px;
                            width: 25px;
                            height: 25px;
                            text-align: center;
                            line-height: 25px;
                        }
                        .con1_text1{
                            font-size: 14px;
                            font-weight: bold;
                            color: #666;
                        }
                    }
                }
                .con2_box{
                    display: flex;
                    justify-content: space-between;
                    .con2_item{
                        border: 1px solid #E5E5E5;
                        width: 265px;
                        height: 150px;
                        box-sizing: border-box;
                        padding: 30px 15px;
                        .con2_lable{
                            font-weight: bold;
                            margin-bottom: 20px;
                        }
                        .con2_value{
                            color: #666;
                        }
                    }
                }
                .con3_box{
                    .con3_row{
                        margin-bottom: 20px;
                    }
                }
            }
        }
    }
}
</style>
