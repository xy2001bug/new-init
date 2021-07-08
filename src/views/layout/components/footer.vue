<template>
  <div class="footer">
      <div class="footer_bgcolor">
          <div class="wrap">
              <div class="con">
                  <div class="col col1">
                    <div class="title">专利技术</div>
                    <div class="text">专利运营</div>
                    <div class="text">专家人才库</div>
                    <div class="text">技术开发需求对接</div>
                    <div class="text">专利产业对接</div>
                  </div>
                  <div class="col col2">
                    <div class="title">资讯服务</div>
                    <div class="text">知识产权宣传培训</div>
                    <div class="text">产业资讯动态</div>
                    <div class="text">知识产权咨询服务</div>
                    <div class="text">关于我们</div>
                  </div>
                  <div class="col col3">
                    <div class="title">联系方式</div>
                    <div class="text">
                        <span class="text_label">电话</span>
                        <span class="text_value">13042063106</span>
                    </div>
                    <div class="text">
                        <span class="text_label">邮箱</span>
                        <span class="text_value">kpnoze@gmail.com</span>
                    </div><div class="text">
                        <span class="text_label">地址</span>
                        <span class="text_value">广东省东莞市榕城区东升街道 7 单元 1 室</span>
                    </div>
                  </div>
                  <div class="col col4">
                    <div class="title">其他平台</div>
                    <div class="code_img">
                        <img class="code_pic" src="@/assets/image/footer/code.png" alt="">
                    </div>
                  </div>
              </div>
          </div>
          <div class="bootom">
            粤公网安备 31011002000058号 | 粤ICP备12020087号-3
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.footer{
    width: 100%;
    height: 375px;
    box-sizing: border-box;
    background: url('../../../assets/image/footer/bg.png') no-repeat;
    background-size: cover;
    font-size: 14px;
    color: #fff;
    .footer_bgcolor{
        width: 100%;
        height: 100%;
        background-color: rgba(33,33,33, .5);
        .con{
            display: flex;
            height: 342px;
            align-items: center;
            justify-content: space-between;
            .col{
                height: 220px;
                .title{
                    font-size: 16px;
                    margin-bottom: 40px;
                }
                .text{
                    color: #999;
                    margin-bottom: 20px;
                }
            }
            .col1, .col2{
                .text{
                    cursor: pointer;
                }
            }
            .col3{
                .text{
                    color: #fff;
                    .text_label{
                        padding-right: 10px;
                        border-right: 1px solid #fff;
                        margin-right: 10px;
                    }
                }
            }
            .col4{
                .code_pic{
                    width: 112px;
                    height: 112px;
                }
            }
        }
        .bootom{
            width: 100%;
            height: 33px;
            line-height: 33px;
            background-color: rgba(255,255,255, .1);
            text-align: center;
            font-size: 12px;
        }
    }
}
</style>
