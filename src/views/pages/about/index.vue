<template>
  <div class="about">
      <div class="header">
          <img src="@/assets/image/about/aboutbg.png" alt="">
      </div>
      <div class="wrap">
          <div class="con">
              <div class="left">
                  <div class="box" :class="{'active': isAbout}" @click="choose('about')">
                      <div class="dian" :class="{'active': isAbout}"></div>
                      <div class="text">关于我们</div>
                  </div>
                  <div class="box" :class="{'active': !isAbout}" @click="choose('map')">
                      <div class="dian" :class="{'active': !isAbout}"></div>
                      <div class="text">联系我们</div>
                  </div>
              </div>
              <div class="right">
                  <div v-if="isAbout" class="about_info">
                      <div class="title_box">
                          <img class="logo" src="../../../assets/image/about/right_logo.png" alt="">
                          <div class="title_txt">
                              <div class="txt1">东莞市军民融合产业知识产权运营服务平台</div>
                              <img src="../../../assets/image/about/right_tt.png" alt="">
                          </div>
                      </div>
                      <div class="art">
                            专猎是前沿技术&优质专利资产的创业服务+跨境交易综合服务商。<br>
                            我们团队具有计算机、电子通信、机械制造、化工、法律、金融领域的复合背景，欧美多国的学习和工作经历，曾就职于国家知识产权局、世界500强企业、技术交易所、基金管理公司、知名律所和国际组织。<br>
                            以亚洲第一、全球知名的垂直领域媒体IPRdaily为入口，覆盖国内26万、海外35万企业用户，拥有第一手的优质企业上百项技术及高价值专利资产和交易需求，覆盖全球10+个国家。<br>
                            重点关注智能零售、智能制造、智能出行、智能城市四大领域相关的人工智能、云计算、大数据、区块链、无线通信、物联网、机器人、新材料等前沿技术。
                      </div>
                  </div>
                  <div v-if="!isAbout">
                        <div class="map_box">
                            <div class="info">
                                <div class="info_name">东莞市军民融合产业知识产权运营服务平台</div>
                                <img class="info_pic" src="@/assets/image/about/info_pic.png" alt="">
                                <div class="info_box">
                                    <div class="lable">电话：</div>
                                    <div class="value">020-83789755</div>
                                </div>
                                <div class="info_box">
                                    <div class="lable">邮箱：</div>
                                    <div class="value">linxiaobin@gittsc.com</div>
                                </div>
                                <div class="info_box">
                                    <div class="lable">地址：</div>
                                    <div class="value">广东省东莞市松山湖园区总部三路20号1栋702室</div>
                                </div>
                            </div>
                            <div class="map">
                                <amap :zoom="17" :center="[113.890732, 22.947637]">
                                    <amap-marker :position="[113.890732, 22.947637]" :zooms='[4,20]' :label="{content:'东莞市军民融合产业知识产权运营服务平台',direction: 'top'}" />
                                </amap>
                            </div>
                        </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'about',
    data () {
        return {
            isAbout: true
        }
    },
    methods: {
        choose (value) {
            if (value === 'about') {
                this.isAbout = true
            } else {
                this.isAbout = false
            }
        }
    }
}
</script>

<style lang='scss' scoped>
.about{
    padding-bottom: 100px;
    .header{
        margin-bottom: 80px;
        img{
            width: 100%;
            height: auto;
        }
    }
    .wrap{
        .con{
            display: flex;
            .left{
                width: 130px;
                height: 156px;
                margin-right: 30px;
                border-right: 1px solid #F2F2F2;
                .box{
                    width: 130px;
                    height: 52px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    &.active{
                        background-color: rgba(255,0,0,.03);
                        border-right: 1px solid #D4161A;
                    }
                    .dian{
                        background-color: #E0E0E0;
                        transform: rotate(45deg);
                        height: 6px;
                        width: 6px;
                        margin-right: 10px;
                        &.active{
                            background: linear-gradient(134.01deg, #FD7082 -1.78%, #DB2D43 100%);
                        }
                    }
                }
            }
            .right{
                flex: 1;
                .about_info{
                    width: 100%;
                    height: 380px;
                    background: url('../../../assets/image/about/right-pic.png') no-repeat;
                    background-size: cover;
                    padding-top: 60px;
                    padding-left: 50px;
                    box-sizing: border-box;
                    .title_box{
                        display: flex;
                        .logo{
                            width: 87px;
                            height: 43px;
                            display: block;
                            margin-right: 17px;
                        }
                        .title_txt{
                            color: #fff;
                            .txt1{
                                font-weight: bold;
                                font-size: 18px;
                                line-height: 25px;
                                letter-spacing: 0.065em;
                                margin-top: 2px;
                            }
                            > img{
                                width: 358px;
                                height: 10px;
                            }
                        }
                    }
                    .art{
                        margin-top: 32px;
                        width: 860px;
                        font-size: 14px;
                        line-height: 24px;
                        color: #fff;
                        opacity: .95;
                    }
                }
                .map_box{
                    flex: 1;
                    height: 266px;
                    border: 1px solid #BEBEBE;
                    box-sizing: border-box;
                    padding: 25px 15px;
                    display: flex;
                    .info{
                        padding: 20px 25px;
                        width: 417px;
                        height: 216px;
                        box-sizing: border-box;
                        background-color: rgba(255,0,0, .03);
                        margin-right: 10px;
                        .info_name{
                            font-size: 18px;
                            letter-spacing: 0.065em;
                        }
                        .info_pic{
                            width: 360px;
                            height: 10px;
                            display: block;
                            margin-bottom: 24px;
                            margin-top: 2px;
                        }
                        .info_box{
                            display: flex;
                            font-size: 14px;
                            line-height: 20px;
                            margin-bottom: 24px;
                            .lable{
                                width: 56px;
                            }
                        }
                    }
                    .map{
                        width: 577px;
                        height: 216px;
                    }
                }
            }
        }
    }
}
</style>
