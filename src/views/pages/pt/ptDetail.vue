<template>
  <div class="ptDetail">
      <div class="wrap">
        <div class="hander">
            <div class="bread_txt">当前位置：</div>
            <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/pt/list' }">专利运营</el-breadcrumb-item>
                <el-breadcrumb-item >专利详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="con">
            <div class="title">
                专利介绍
            </div>
            <div class="info">
                <div class="contentBlock">
                    <div class="table" v-if="detail && detail.patent">
                        <div class="tableBlock">
                            <div class="tableTit">专利名称</div>
                            <div class="tableMes">{{detail.name}}</div>
                        </div>
                        <div class="tableBlock">
                            <div class="tableTit">申请日</div>
                            <div class="tableMes">{{detail.patent.appDate}}</div>
                        </div>
                        <div class="tableBlock">
                            <div class="tableTit">专利号</div>
                            <div class="tableMes">{{detail.patent.appNo}}</div>
                        </div>
                        <div class="tableBlock">
                            <div class="tableTit">授权公告日</div>
                            <div class="tableMes">{{detail.patent.issuedPubDate}}</div>
                        </div>
                        <div class="tableBlock">
                            <div class="tableTit">专利类型</div>
                            <div class="tableMes">{{detail.patent.ipType}}</div>
                        </div>
                        <div class="tableBlock">
                            <div class="tableTit">缴费截止日</div>
                            <div class="tableMes">{{detail.patent.statusDeadline}}</div>
                        </div>
                        <div class="tableBlock">
                            <div class="tableTit">主分类号</div>
                            <div class="tableMes">{{detail.patent.fields}}</div>
                        </div>
                        <div class="tableBlock">
                            <div class="tableTit">法律状态</div>
                            <div class="tableMes">{{detail.patent.groupingLegalStatus}}({{detail.patent.legalStatus}})</div>
                        </div>
                        <div class="tableBlock">
                            <div class="tableTit">申请人地址</div>
                            <div class="tableMes">{{detail.patent.applicantAddress}}</div>
                        </div>
                        <div class="tableBlock">
                            <div class="tableTit">专利说明书</div>
                            <div class="tableMes check" v-if="detail.patent.specificationFile" @click="headleInstructions">查看</div>
                        </div>
                    </div>
                    <div class="otherMes" v-if="detail.patent">
                        <div class="otherMesTit"><div>摘要：</div></div>
                        <div class="otherMesCon">{{detail.patent.description}}</div>
                    </div>
                    <div class="otherMes" v-if="detail.patent">
                        <div class="otherMesTit"><div>权利要求书：</div></div>
                        <div class="otherMesCon" v-html="detail.patent.claim"></div>
                    </div>
                    <div class="otherMes" v-if="legalInfo && legalInfo.length">
                        <div class="otherMesTit"><div>法律信息：</div></div>
                        <div class="otherMesCon legal_left" ref="legalLfetheight">
                            <div class="legalInfo" v-for="(item,index) in legalInfo" :key="index">
                                <div style="z-index:9"><svg-icon icon-class="choose" class-name="choose" ></svg-icon></div>
                                <div class="tabelLeft">
                                    <div class="date">{{item.date}}</div>
                                </div>
                                <div class="tabelRight">
                                    <div class="type">{{item.type}}</div>
                                    <div class="content">{{item.content}}</div>
                                </div>
                            </div>
                            <div class="legal_border" v-if="legalInfo && legalInfo.length>1"></div>
                        </div>
                    </div>
                    <div class="otherMes" v-if="codeList && codeList.length">
                        <div class="otherMesTit"><div>所属分类：</div></div>
                        <div class="otherMesCon">
                            <div class="codeList" v-for="(item,index) in codeList" :key="index">
                                <span class="codeListLeft"><span v-if="index>0">-</span><span v-if="index>1">-</span><span v-if="index>2">-</span><span v-if="index>3">-</span>{{item.code}}</span>
                                <span class="codeListRight">{{item.text}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import Pt from '@/api/pt.js'
export default {
    name: 'ptDetail',
    data () {
        return {
            detail: { patent: {} },
            legalInfo: [],
            codeList: []
        }
    },
    created () {
        this.productId = this.$route.query.id
        this.orderDetail()
    },
    mounted () {
    },
    methods: {
        // 订单详情
        orderDetail () {
            const that = this
            const obj = {
                id: that.productId
            }
            Pt.getDetail(obj).then((response) => {
                if (response.code === 200) {
                    that.detail = response.result
                    if (response.result.patent && response.result.patent.legalInfo && response.result.patent.legalInfo.length) {
                        that.legalInfo = response.result.patent.legalInfo
                    }
                    if (that.detail.patent && that.detail.patent.fields) {
                        that.getIntcls()
                    }
                }
            }).catch((response) => {
                that.$message.error(response.message)
            })
        },
        headleInstructions () { // 查看专利说明书
            const fileUrl = this.detail.patent.specificationFile
            if (fileUrl) {
                window.open(fileUrl)
            } else {
                this.$message({
                    type: 'error',
                    message: '本专利暂无说明书'
                })
            }
        },
        getIntcls () {
            const that = this
            const obj = {
                code: that.detail.patent.fields
            }
            Pt.getIntcls(obj).then(res => {
                if (res.code === 200) {
                    that.codeList = res.result
                }
            })
        }
    }
}
</script>

<style lang='scss' scoped>
.ptDetail{
    width: 100%;
    padding-bottom: 70px;
    .wrap{
        width: 1200px;
        margin: 0 auto;
        font-size: 14px;
        .con{
            .title{
                width: 100%;
                height: 50px;
                background-color: #fff;
                margin-bottom: 20px;
                line-height: 50px;
                border-left: 9px solid #F94C15;
                padding-left: 20px;
                font-size: 16px;
                font-weight: bold;
                box-sizing: border-box;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            }
            .info{
                padding: 60px;
                background-color: #fff;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                .contentBlock{
                        padding: 0px 30px 30px 30px;
                        box-sizing: border-box;
                        background: white;
                        margin-bottom: 20px;
                        background: white;
                        .table{
                            height: 264px;
                            width: 1015px;
                            border: 1px solid #D9DEE7;
                            display: flex;
                            flex-wrap: wrap;
                            background-color: #FBFEFF;
                            .tableBlock{
                                width: 50%;
                                height: 52px;
                                border-bottom: 1px solid #D9DEE7;
                                display: flex;
                                align-items: center;
                                .tableTit{
                                    width: 110px;
                                    height: 100%;
                                    background: #F9FAFE;
                                    display: flex;
                                    align-items: center;
                                    padding-left: 20px;
                                    box-sizing: border-box;
                                    color: #333;
                                    font-size: 14px;
                                }
                                .tableMes{
                                    flex: 1;
                                    color: #666;
                                    font-size: 14px;
                                    padding-left: 20px;
                                    box-sizing: border-box;
                                    display: flex;
                                    align-items: center;
                                }
                                .check{
                                    cursor: pointer;
                                    color: #0751DC;
                                    text-decoration: underline;
                                }
                            }
                            .tableBlock:nth-child(9),.tableBlock:nth-child(10){
                                border-bottom: none;
                            }
                        }
                        .otherMes{
                            width: 100%;
                            margin-top: 14px;
                            .otherMesTit{
                                width: 100px;
                                height: 14px;
                                padding: 0 0 0 5px;
                                margin:30px 0 15px 0;
                                border-left: 4px solid $mainColor;
                                color: #333;
                                font-weight: bold;
                                display: flex;
                                align-items: center;
                            }
                            .otherMesCon{
                                flex: 1;
                                font-size: 14px;
                                color: $secondaryTextColor;
                                line-height: 22px;
                                .codeList{
                                    width: 100%;
                                    display: flex;
                                    flex-direction: row;
                                    align-items: center;
                                    line-height: 22px;
                                    color: $secondaryTextColor;
                                    font-size: 14px;
                                    .codeListLeft{
                                        width: 150px;
                                    }
                                    .codeListRight{
                                        flex: 1;
                                    }
                                }
                                .legalInfo{
                                    width: 100%;
                                    display: flex;
                                    flex-direction: row;
                                    line-height: 22px;
                                    color: $secondaryTextColor;
                                    font-size: 13px;
                                    margin-bottom: 15px;
                                    &:last-child{
                                        margin-bottom: 0;
                                    }
                                    .tabelLeft{
                                        padding-left: 10px;
                                        width: 95px;
                                        line-height: 22px;
                                        display: flex;
                                        flex-direction: column;
                                        align-items: flex-start;
                                    }
                                    .tabelRight {
                                        flex:1;
                                        .type{
                                            font-weight: bold;
                                        }
                                        .content {
                                            line-height: 24px;
                                            color: $textColor;
                                            font-size: 12px;
                                        }
                                    }
                                }
                            }
                            .legal_left{
                                position: relative;
                                font-size: 13px;
                                .legal_border{
                                    position: absolute;
                                    border-left: 1px dashed #F04F4F;
                                    height: 81%;
                                    top: 10px;
                                    left: 6px;
                                }
                            }
                        }
                        .tip{
                            margin-top: 14px;
                            font-size: 12px;
                            color: $textColor;
                            display: block;
                            line-height: 22px;
                        }
                        .progress{
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            .progressBlock{
                                background: #F0F5FC;
                                border:1px solid #D9DEE7;
                                box-sizing: border-box;
                                width: 150px;
                                height: 184px;
                                position: relative;
                                padding: 33px 13px 0 13px;
                                display: flex;
                                align-items: center;
                                flex-direction: column;
                                .badge{
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    font-size: 30px;
                                }
                                .progressImg{
                                    font-size: 40px;
                                }
                                .progressTit{
                                    font-size: 16px;
                                    color: $titleColor;
                                    line-height: 24px;
                                    text-align: center;
                                    font-size: 16px;
                                    margin:12px 0 20px 0;
                                    font-weight: bold;
                                }
                                .progressText{
                                    color: $textColor;
                                    font-size: 12px;
                                    line-height: 20px;
                                    text-align: center;
                                    display: inline-block;
                                }
                            }
                        }
                        .transfer{
                            width: 100%;
                            .lineOne{ width: 141px; }
                            .lineTwo{ width: 227px; }
                            .lineThree{ width: 221px; }
                            .lineFour{ width: 243px; }
                            .transferTop{
                                background: #4F607F;
                                color: white;
                                font-size: 14px;
                                width: 100%;
                                height: 62px;
                                span{
                                    display: inline-block;
                                    height:100%;
                                    text-align: center;
                                    line-height: 62px;
                                }
                            }
                            .transferCon{
                                height: 145px;
                                border-left: 1px solid #D9DEE7;
                                border-bottom: 1px solid #D9DEE7;
                                display: flex;
                                align-items: center;
                                color :$secondaryTextColor;
                                .lineOne,.lineTwo,.lineThree,.lineFour{
                                    border-right: 1px solid #D9DEE7;
                                    height:100%;
                                    .borderOne,.borderTwo{
                                        width: 100%;
                                        border-bottom: 1px solid #D9DEE7;
                                        height: 72px;
                                        text-align: center;
                                        line-height: 72px;
                                    }
                                }
                                .lineThree,.lineFour{
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    flex-direction: column;
                                    span{
                                        line-height: 22px;
                                        display: inline-block;
                                        margin-bottom: 8px;
                                    }
                                }
                            }
                        }
                    }
            }
        }
    }
}
</style>
