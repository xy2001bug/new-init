<template>
  <div class="home">
      <div class="banner">
          <el-carousel height="600px">
            <el-carousel-item v-for="item in bannerList" :key="item">
                <img :src="item" alt="">
            </el-carousel-item>
          </el-carousel>
      </div>
      <div class="wrap">
          <div class="con1">
              <div class="title_box">
                <div class="title1">LATEST NEWS</div>
                <div class="title2_box">
                    <div class="title2_left">资讯动态</div>
                    <div class="title2_right">掌握最新知产动态</div>
                </div>
              </div>
              <div class="con1_content">
                  <div class="left">
                      <img v-if="showLeft" src="@/assets/image/home/con1_left.png" alt="">
                      <img v-if="!showLeft" src="@/assets/image/home/con1_right.png" alt="">
                  </div>
                  <div class="right">
                      <div class="header_box">
                          <div class="header_item" v-for="(item,index) in conList" :key="index" :class="{'active':item.active}" @click="chooseCon1(item)">{{ item.title }}</div>
                      </div>
                      <div class="body_box">
                          <div class="row_items">
                              <div class="row_title">苹果联合创始人沃兹尼亚克因涉嫌侵犯 “Woz U ”版权而被起诉</div>
                              <div class="row_time">2020-09-09</div>
                          </div>
                          <div class="row_items">
                              <div class="row_title">苹果联合创始人沃兹尼亚克因涉嫌侵犯 “Woz U ”版权而被起诉</div>
                              <div class="row_time">2020-09-09</div>
                          </div>
                          <div class="row_items">
                              <div class="row_title">苹果联合创始人沃兹尼亚克因涉嫌侵犯 “Woz U ”版权而被起诉</div>
                              <div class="row_time">2020-09-09</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="con2">
          <div class="search_header">
              <div class="wrap con2_header">
                <div class="title_box">
                    <div class="title1">PATENT OPERATION</div>
                    <div class="title2_box">
                        <div class="title2_left">专利运营</div>
                        <div class="title2_right">共享创新成果，提升保障优势</div>
                    </div>
                </div>
                <div class="search_box">
                    <i class="el-icon-search search_icon"></i>
                    <input class="search_inp" v-model="keyWord" type="text" placeholder="请输入您要搜索的关键词、专利号、专利名称，具体分类领域等等">
                    <div class="search_btn" @click="linkPt">快速查询</div>
                </div>
              </div>
          </div>
          <div class="wrap con2_body" v-if="ptList.length">
            <div class="pt_box" v-for="(item,index) in ptList" :key="index">
                <div class="left" v-if="item.patent">
                    <img class="left_pic" v-if="item.patent.ipType === '发明'" src="@/assets/image/home/inv_pic.png" alt="">
                    <img class="left_pic" v-if="item.patent.ipType === '实用新型'" src="@/assets/image/home/syxx_pic.png" alt="">
                    <img class="left_pic" v-if="item.patent.ipType === '外观设计'" src="@/assets/image/home/appe_pic.png" alt="">
                </div>
                <div class="right" v-if="item.patent">
                    <div class="con2_title_box">
                        <span class="title_txt">{{ item.name }}</span>
                        <span class="title_tip tip_label1" v-if="item.imagePath.indexOf('/a.png') !== -1">人类生活需要</span>
                        <span class="title_tip tip_label2" v-if="item.imagePath.indexOf('/b.png') !== -1">作业运输</span>
                        <span class="title_tip tip_label3" v-if="item.imagePath.indexOf('/c.png') !== -1">化学冶金</span>
                        <span class="title_tip tip_label4" v-if="item.imagePath.indexOf('/d.png') !== -1">纺织造纸</span>
                        <span class="title_tip tip_label5" v-if="item.imagePath.indexOf('/e.png') !== -1">固定建筑物</span>
                        <span class="title_tip tip_label6" v-if="item.imagePath.indexOf('/f.png') !== -1">机械工程、照明、加热、武器爆破</span>
                        <span class="title_tip tip_label7" v-if="item.imagePath.indexOf('/g.png') !== -1">物理</span>
                        <span class="title_tip tip_label8" v-if="item.imagePath.indexOf('/h.png') !== -1">电学</span>
                    </div>
                    <div class="decs">
                        <span class="decs_label">摘要：</span>
                        <span class="decs_txt">{{ item.patent.description }}</span>
                    </div>
                    <div class="info">
                        <div class="info_box">
                            <span class="info_label">专利号：</span>
                            <span class="info_value">{{item.patent.appNo}}</span>
                        </div>
                        <div class="info_box">
                            <span class="info_label">主分类号：</span>
                            <span class="info_value">{{item.patent.fields}}</span>
                        </div>
                        <div class="info_box">
                            <span class="info_label">申请日：</span>
                            <span class="info_value">{{item.patent.appDate}}</span>
                        </div>
                        <div class="info_box">
                            <span class="info_label">授权公告日：</span>
                            <span class="info_value">{{item.patent.issuedPubDate}}</span>
                        </div>
                        <div class="info_box">
                            <span class="info_label">专利说明书：</span>
                            <span class="info_value" style="cursor: pointer;color: #006DEC;text-decoration-line: underline;" v-if="item.patent.specificationFile" @click="headleInstructions(item)">查看</span>
                        </div>
                    </div>
                    <div class="info">
                        <div class="info_box">
                            <span class="info_label">法律状态：</span>
                            <span class="info_value">
                                <span>{{item.patent.groupingLegalStatus}}</span>
                                <span>({{item.patent.legalStatus}})</span>
                            </span>
                        </div>
                        <div class="info_box">
                            <span class="info_label">申请人地址：</span>
                            <span class="info_value">{{ item.patent.applicantAddress }}</span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div class="more_pt">
              <div class="more_pt_btn">更多专利</div>
          </div>
      </div>
      <div class="con3">
          <div class="wrap">
                <div class="title_box">
                    <div class="title1">TECHNOLOGY DEMAND MATCHING</div>
                    <div class="title2_box">
                        <div class="title2_left">技术需求对接</div>
                        <div class="title2_right">军民同心，谋求技术效益最大化</div>
                    </div>
                </div>
                <div class="con3_body">
                    <div class="left">
                        <div class="con3_title">找技术</div>
                        <div class="con3_left_content">
                            <div class="con3_table">
                                <div class="ct_header">
                                    <div class="col1">需求名称</div>
                                    <div class="col2">行业领域</div>
                                    <div class="col3">拟合作方式</div>
                                </div>
                                <div class="ct_body">
                                    <div class="ct_row">
                                        <div class="col1">需求名称</div>
                                        <div class="col2">行业领域</div>
                                        <div class="col3">拟合作方式</div>
                                    </div>
                                    <div class="ct_row">
                                        <div class="col1">需求名称</div>
                                        <div class="col2">行业领域</div>
                                        <div class="col3">拟合作方式</div>
                                    </div>
                                    <div class="ct_row">
                                        <div class="col1">需求名称</div>
                                        <div class="col2">行业领域</div>
                                        <div class="col3">拟合作方式</div>
                                    </div>
                                </div>
                            </div>
                            <div class="con3_more">
                                <span class="more_icon3">更多技术成果</span>
                                <i class="el-icon-d-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="con3_title">提需求</div>
                        <div class="con3_right_content">
                            <div class="cr_title">专业顾问，专业团队解决您的技术需求难题</div>
                            <div class="cr_tip">
                                <svg-icon icon-class="flashLeft" class-name="flashLeft"></svg-icon>
                                市场快速匹配，专业顾问对接
                                <svg-icon icon-class="flashRight" class-name="flashRight"></svg-icon>
                            </div>
                            <div class="cr_btn">
                                去提需求  GO!
                            </div>
                        </div>
                    </div>
                </div>
          </div>
      </div>
      <div class="con4">
          <div class="wrap">
            <div class="title_box">
                <div class="title1">EXPERT TALENT POOL</div>
                <div class="title2_box">
                    <div class="title2_left">专家人才库</div>
                    <div class="title2_right">源自大平台，权威、专业</div>
                </div>
            </div>
            <div class="con4_body">
                <div class="left">
                    <div class="c4_more">
                        <div class="c4_more_btn">更多专家 <i class="el-icon-d-arrow-right"></i></div>
                    </div>
                </div>
                <div class="right">
                    <div class="expert_box">
                        <div class="expert_item">
                            <div class="ei_left">
                                <img src="../../../assets/image/home/con4_ei.png" alt="">
                            </div>
                            <div class="ei_right">
                                <div class="name_box">
                                    <div class="name">邓芮</div>
                                    <div class="tip">教授</div>
                                </div>
                                <div class="desc_box">
                                    <div class="desc_label">研究方向：</div>
                                    <div class="desc_value">基于网络环境的企业集成化管理，区域发展规划和企业发展战略研究，大叔大婶大所大信息...</div>
                                </div>
                            </div>
                        </div>
                        <div class="expert_item">
                            <div class="ei_left">
                                <img src="../../../assets/image/home/con4_ei.png" alt="">
                            </div>
                            <div class="ei_right">
                                <div class="name_box">
                                    <div class="name">邓芮</div>
                                    <div class="tip">教授</div>
                                </div>
                                <div class="desc_box">
                                    <div class="desc_label">研究方向：</div>
                                    <div class="desc_value">基于网络环境的企业集成化管理，区域发展规划和企业发展战略研究，大叔大婶大所大信息...</div>
                                </div>
                            </div>
                        </div>
                        <div class="expert_item">
                            <div class="ei_left">
                                <img src="../../../assets/image/home/con4_ei.png" alt="">
                            </div>
                            <div class="ei_right">
                                <div class="name_box">
                                    <div class="name">邓芮</div>
                                    <div class="tip">教授</div>
                                </div>
                                <div class="desc_box">
                                    <div class="desc_label">研究方向：</div>
                                    <div class="desc_value">基于网络环境的企业集成化管理，区域发展规划和企业发展战略研究，大叔大婶大所大信息...</div>
                                </div>
                            </div>
                        </div>
                        <div class="expert_item">
                            <div class="ei_left">
                                <img src="../../../assets/image/home/con4_ei.png" alt="">
                            </div>
                            <div class="ei_right">
                                <div class="name_box">
                                    <div class="name">邓芮</div>
                                    <div class="tip">教授</div>
                                </div>
                                <div class="desc_box">
                                    <div class="desc_label">研究方向：</div>
                                    <div class="desc_value">基于网络环境的企业集成化管理，区域发展规划和企业发展战略研究，大叔大婶大所大信息...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </div>
      <div class="con5">
          <div class="con5_left">
              <div class="title_box">
                <div class="title1">PLATFORM INTRODUCTION</div>
                <div class="title2_box">
                    <div class="title2_left">平台简介</div>
                    <div class="title2_right">协同创新推进军民融合</div>
                </div>
              </div>
          </div>
          <div class="con5_right">
              <div class="title">
                  推进经济、科技、教育、人才各个领域的军民融合
              </div>
              <div class="art">
                  久钛状坟譬领驳伴判书披*尝磨凶村帕桃擂惑荸，遗吓洛二钩壳误锦翰瘦瓣哑吐协帝俊延央劳叭喝惑慕怕祸巩哪艰*去脓放例…娘警戴肋兰宇换墒汽裹慨稻垅撮锡征晰专免分俩消辱胃售软依奋炫弗轰哺烟苍辆褐咐汰葫溅索付放源知亿彝屋党杯、衅早行罕誓尤掏砖盏坐钦卢煽湾悉孢铜挥两膀锦氢授教盼株筹拣枫念箭艰腔压吕另矢麻授额姆螬货预准卜透阵淑肛闻啥拚毫挺摸孙救茶猿阁廷觉荚甩傍煮芽侨屏熄就穷段抓损资炕签也赖！
              </div>
              <div class="con5_btn">
                  了解更多
                  <i class="el-icon-d-arrow-right"></i>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Pt from '@/api/pt.js'
import banner1 from '../../../assets/image/home/banner1.png'
import banner2 from '../../../assets/image/home/banner2.png'
export default {
    data () {
        return {
            keyWord: '',
            bannerList: [banner1, banner2],
            conList: [
                { title: '产业资讯', active: true, value: '' },
                { title: '宣传培训', active: false, value: '' }
            ],
            showLeft: true,
            ptList: [],
            screenList: {
                categories: ['p'], // 商品分类 p:专利  t：商标
                keyword: '', // 关键字
                // orderBy: 'DEFAULT', // 排序方式
                orderBy: 'PRICE_DESC',
                pager: {
                    pageIndex: 1, // 页数
                    pageSize: 5 // 每页条数
                }
            }
        }
    },
    created () {
        this.headleSearch()
    },
    methods: {
        linkPt () {
            const url = this.$router.resolve({ path: '/pt/list', query: { searchType: 'keyword', keyword: this.keyWord } })
            window.open(url.href, 'blank')
        },
        // con1切换
        chooseCon1 (item) {
            this.conList.forEach(item => {
                item.active = false
            })
            item.active = true
            if (item.title === '产业资讯') {
                this.showLeft = true
            } else {
                this.showLeft = false
            }
        },
        // 获取列表
        headleSearch () {
            Pt.search(this.screenList).then(response => {
                const { code, result, message } = response
                if (code === 200) {
                    this.ptList = result
                } else {
                    this.$message({
                        type: 'error',
                        message: message
                    })
                }
            })
        },
        // 下载专利说明书
        headleInstructions (item) {
            if (item.patent.specificationFile) {
                window.open(item.patent.specificationFile)
            } else {
                this.$message({
                    type: 'error',
                    message: '本专利暂无说明书'
                })
            }
        }
    }
}
</script>

<style lang='scss' scoped>
.home{
    width: 100%;
    background-color: #F9FAFF;
    .banner{
        width: 100%;
        margin-bottom: 80px;
    }
    .title_box{
        .title1{
            color: #E0E0E0;
            font-size: 22px;
            margin-bottom: 15px;
        }
        .title2_box{
            display: flex;
            align-items: flex-end;
            .title2_left{
                font-size: 24px;
            }
            .title2_right{
                margin-left: 10px;
                border-left: 1px solid #fff;
                padding-left: 10px;
                font-size: 14px;
            }
        }
    }
    .con1{
        margin-bottom: 100px;
        .title_box{
            .title2_box{
                color: $mainColor;
                .title2_right{
                    border-left: 1px solid $mainColor;
                    line-height: 14px;
                }
            }
        }
        .con1_content{
            display: flex;
            margin: 56px 0 0 0;
            .left{
                > img{
                    width: 491px;
                    height: 416px;
                    display: block;
                }
            }
            .right{
                flex: 1;
                .header_box{
                    background-color: #fff;
                    display: flex;
                    height: 54px;
                    margin-bottom: 10px;
                    box-sizing: border-box;
                    padding-left: 20px;
                    padding-top: 17px;
                    .header_item{
                        margin-right: 40px;
                        cursor: pointer;
                        &:hover{
                            color: $titleColor;
                            border-bottom: 5px solid $titleColor;
                        }
                        &.active{
                            color: $titleColor;
                            border-bottom: 5px solid $titleColor;
                        }
                    }
                }
                .body_box{
                    padding: 0 20px;
                    width: 710px;
                    box-sizing: border-box;
                    background-color: #fff;
                    height: 350px;
                    .row_items{
                        display: flex;
                        cursor: pointer;
                        height: 64px;
                        align-items: center;
                        font-size: 14px;
                        border-bottom: 1px solid #F2F2F2;
                        .row_title{
                            width: 450px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            &:hover{
                                color: $titleColor;
                            }
                        }
                    }
                }
            }
        }
    }
    .con2{
        background-color: #fff;
        padding-bottom: 50px;
        .search_header{
            width: 100%;
            height: 126px;
            background: linear-gradient(90deg, #D4161A 0%, #F7383C 100%);
            .con2_header{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 40px;
                .title_box{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    height: 126px;
                    .title1{
                        color: #fff;
                        opacity: .5;
                    }
                    .title2_box{
                        color: #fff;
                        .title2_right{
                            border-left: 1px solid #fff;
                            line-height: 14px;
                        }
                    }
                }
                .search_box{
                    display: flex;
                    align-items: center;
                    color: #fff;
                    height: 46px;
                    line-height: 46px;
                    position: relative;
                    .search_icon{
                        position: absolute;
                        left: 14px;
                        top: 15px;
                    }
                    .search_inp{
                        width: 505px;
                        padding: 16px 42px;
                        background-color: rgba(255,255,255, .15);
                        color: #fff;
                        font-size: 14px;
                        border-radius: 2px 0 0 2px;
                    }
                    .search_btn{
                        margin-right: 20px;
                        width: 140px;
                        text-align: center;
                        background-color: #fff;
                        color: $mainColor;
                        cursor: pointer;
                        font-size: 16px;
                        border-radius: 0px 2px 2px 0;
                    }
                    ::-webkit-input-placeholder {
                        color: #fff;
                        opacity: .7;
                    }
                    ::-ms-input-placeholder {
                        color: #fff;
                        opacity: .7;
                    }
                    :-moz-placeholder {
                        color: #fff;
                        opacity: .7;
                    }
                }
            }
        }
        .con2_body{
            margin-top: 40px;
            .pt_box{
                padding: 20px;
                border: 1px solid #E0E0E0;
                margin-bottom: 20px;
                display: flex;
                .left{
                    margin-right: 20px;
                    .left_pic{
                        width: 130px;
                        height: 130px;
                        display: block;
                    }
                }
                .right{
                    .con2_title_box{
                        margin-top: 5px;
                        margin-bottom: 25px;
                        display: flex;
                        .title_txt{
                            font-size: 16px;
                            font-weight: bold;
                            margin-right: 10px;
                            display: inline-block;
                            max-width: 700px;
                            white-space:nowrap;
                            overflow:hidden;
                            text-overflow:ellipsis;
                            cursor: pointer;
                        }
                        .title_tip{
                            padding: 2px 4px;
                            color: $mainColor;
                            border: 1px solid $mainColor;
                            font-size: 12px;
                        }
                        .tip_label2{
                            color: #F97515;
                            border: 1px solid #F97515;
                        }
                        .tip_label2{
                            color: #F97515;
                            border: 1px solid #F97515;
                        }
                        .tip_label3{
                            color: #6F32F0;
                            border: 1px solid #6F32F0;
                        }
                        .tip_label4{
                            color: #00A3FF;
                            border: 1px solid #00A3FF;
                        }
                        .tip_label5{
                            color: #325C20;
                            border: 1px solid #325C20;
                        }
                        .tip_label6{
                            color: #f915ed;
                            border: 1px solid #f915ed;
                        }
                        .tip_label7{
                            color: #67bebe;
                            border: 1px solid #67bebe;
                        }
                        .tip_label8{
                            color: #00e284;
                            border: 1px solid #00e284;
                        }
                    }
                    .decs{
                        margin-bottom: 10px;
                        font-size: 12px;
                        display: flex;
                        .decs_label{
                            color: #999;
                            margin-right: 10px;
                        }
                        .decs_txt{
                            width: 670px;
                            white-space:nowrap;
                            overflow:hidden;
                            text-overflow:ellipsis;
                        }
                    }
                    .info{
                        display: flex;
                        font-size: 12px;
                        line-height: 18px;
                        .info_box{
                            margin-bottom: 10px;
                            margin-right: 30px;
                            display: flex;
                            .info_label{
                                color: #999;
                            }
                            .info_value{
                                color: #333;
                            }
                        }
                    }
                }
                &:hover{
                    background: rgba(249, 76, 21, 0.1);
                }
            }
        }
        .more_pt{
            text-align: center;
            .more_pt_btn{
                width: 108px;
                height: 32px;
                margin: 50px auto 0;
                background: linear-gradient(90deg, #D4161A 0%, #FF6063 100%);
                border-radius: 2px;
                color: #fff;
                font-size: 14px;
                line-height: 32px;
                font-weight: bold;
                cursor: pointer;
            }
        }
    }
    .con3{
        width: 100%;
        height: 554px;
        background: url('../../../assets/image/home/con3_bg.png') no-repeat;
        background-size: cover;
        .wrap{
            padding-top: 60px;
            .title_box{
                .title1{
                    color: #fff;
                    opacity: .5;
                }
                .title2_box{
                    color: #fff;
                    .title2_right{
                        border-left: 1px solid #fff;
                        line-height: 14px;
                    }
                }
            }
            .con3_body{
                margin-top: 60px;
                display: flex;
                .left, .right{
                    margin-right: 24px;
                    width: 588px;
                    .con3_title{
                        background: url('../../../assets/image/home/con3_left.png') no-repeat;
                        width: 588px;
                        height: 60px;
                        text-align: center;
                        line-height: 60px;
                        color: #fff;
                        position: relative;
                        font-weight: bold;
                        margin-bottom: 10px;
                        &::after, &::before{
                            content: '';
                            position: absolute;
                            top: 50%;
                            width: 160px;
                            height: 1px;
                        }
                        &::before{
                            background: linear-gradient(to right, rgba(251, 251, 251, 0.09)rgba(251, 251, 251, 0.59),#FFF);
                            left: 100px;
                        }
                        &::after{
                            background: linear-gradient(to left, rgba(251, 251, 251, 0.09)rgba(251, 251, 251, 0.59),#FFF);
                            left: 327px;
                        }
                    }
                    .con3_left_content{
                        .con3_table{
                            background-color: rgba(255,255,255, .05);
                            width: 588px;
                            height: 160px;
                            box-sizing: border-box;
                            padding: 15px 20px;
                            font-size: 12px;
                            text-align: center;
                            color: #fff;
                            .col1{
                                width: 334px;
                            }
                            .col2{
                                width: 116px;
                            }
                            .col3{
                                width: 96px;
                            }
                            .ct_header{
                                margin-bottom: 15px;
                                border-bottom: 1px solid rgba(255,255,255, 0.6);
                                padding-bottom: 15px;
                                display: flex;
                                .col1, .col2{
                                    border-right: 1px  solid rgba(255,255,255, .6);
                                }
                            }
                            .ct_body{
                                .ct_row{
                                    display: flex;
                                    margin-bottom: 15px;
                                    > div{
                                        white-space:nowrap;
                                        overflow:hidden;
                                        text-overflow:ellipsis;
                                        text-align: center;
                                        border-right: 1px solid rgba(255,255,255, 0);
                                        cursor: pointer;
                                    }
                                }
                            }
                        }
                        .con3_more{
                            margin-top: 10px;
                            background-color: rgba(255,255,255, .05);
                            text-align: center;
                            font-size: 12px;
                            color: #fff;
                            height: 44px;
                            line-height: 44px;
                            .more_icon3{
                                text-decoration: underline;
                                margin-right: 5px;
                                cursor: pointer;
                            }
                        }
                    }
                }
                .right{
                    .con3_title{
                        background: url('../../../assets/image/home/con3_right.png') no-repeat;
                    }
                    .con3_right_content{
                        width: 588px;
                        height: 213px;
                        background: url('../../../assets/image/home/con3_right_bg.png') no-repeat;
                        background-size: cover;
                        color: #fff;
                        text-align: center;
                        padding-top: 30px;
                        box-sizing: border-box;
                        .cr_title{
                            font-family: PangMenZhengDao;
                            font-size: 24px;
                            margin-bottom: 34px;
                        }
                        .cr_tip{
                            font-size: 16px;
                            margin-bottom: 28px;
                        }
                        .cr_btn{
                            padding: 9px 25px;
                            border: 1px solid #fff;
                            font-size: 14px;
                            width: 142px;
                            margin: 0 auto;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
    .con4{
        width: 100%;
        height: 717px;
        background: url('../../../assets/image/home/con4_bg.png') no-repeat;
        background-size: cover;
        .wrap{
            padding-top: 60px;
            .title_box{
                .title1{
                    color: #BDBDBD;
                }
                .title2_box{
                    color: $mainColor;
                    .title2_right{
                        border-left: 1px solid $mainColor;
                        line-height: 14px;
                    }
                }
            }
            .con4_body{
                margin-top: 60px;
                display: flex;
                .left{
                    width: 498px;
                    height: 334px;
                    background: url('../../../assets/image/home/con4_left.png') no-repeat;
                    display: flex;
                    justify-content: flex-end;
                    align-items: flex-end;
                    .c4_more{
                        background-color: rgba(255,255,255, .2);
                        width: 270px;
                        height: 167px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        .c4_more_btn{
                            text-align: center;
                            line-height: 32px;
                            color: #fff;
                            width: 106px;
                            height: 30px;
                            border: 1px solid #fff;
                            border-radius: 2px;
                            font-size: 14px;
                            cursor: pointer;
                        }
                    }
                }
                .right{
                    flex: 1;
                    background-color: #fff;
                    .expert_box{
                        display: flex;
                        flex-wrap: wrap;
                        .expert_item{
                            display: flex;
                            width: 350px;
                            height: 167px;
                            box-sizing: border-box;
                            font-size: 14px;
                            padding-top: 14px;
                            padding-right: 10px;
                            &:nth-child(1) {
                                border-right: 1px solid #E0E0E0;
                                border-bottom: 1px solid #E0E0E0;
                            }
                            &:nth-child(2){
                                border-bottom: 1px solid #E0E0E0;
                            }
                            &:nth-child(3){
                                border-right: 1px solid #E0E0E0;
                            }
                            .ei_left{
                                > img{
                                    width: 101px;
                                    height: 139px;
                                    display: block;
                                    margin-right: 15px;
                                    padding-left: 15px;
                                }
                            }
                            .ei_right{
                                .name_box{
                                    padding-top: 3px;
                                    display: flex;
                                    align-items: baseline;
                                    margin-bottom: 20px;
                                    .name{
                                        font-size: 18px;
                                        font-weight: bold;
                                        margin-right: 10px;
                                    }
                                    .tip{
                                        color: #999;
                                    }
                                }
                                .desc_box{
                                    .desc_label{
                                        color: #999;
                                        margin-bottom: 10px;
                                    }
                                    .desc_value{
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                        display: -webkit-box;
                                        -webkit-line-clamp: 3;
                                        -webkit-box-orient: vertical;
                                        line-height: 21px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .con5{
        display: flex;
        margin-bottom: 80px;
        .con5_left{
            background: url('../../../assets/image/home/con5_left.png') no-repeat;
            background-size: cover;
            height: 510px;
            flex: 1;
            text-align: center;
            padding-top: 70px;
            box-sizing: border-box;
            .title_box{
                color: #fff;
                margin: 0 auto;
                width: 300px;
                .title1{
                    opacity: .4;
                }
            }
        }
        .con5_right{
            flex: 1;
            height: 510px;
            background: url('../../../assets/image/home/con5_right.png') no-repeat;
            background-size: cover;
            padding: 90px 0 0 50px;
            box-sizing: border-box;
            .title{
                font-size: 18px;
                font-weight: bold;
                line-height: 25px;
                margin-bottom: 65px;
            }
            .art{
                line-height: 28px;
                font-size: 14px;
                width: 485px;
                margin-bottom: 50px;
            }
            .con5_btn{
                width: 108px;
                height: 32px;
                border: 1px solid #4f4f4f;
                text-align: center;
                line-height: 32px;
                font-size: 14px;
                cursor: pointer;
                > i{
                    margin-left: 5px;
                }
            }
        }
    }
}
</style>
