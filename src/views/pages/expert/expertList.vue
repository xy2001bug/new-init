<template>
  <div class="expert-list">
      <div class="header">
          <div class="title">
              <img src="../../../assets/image/expert/header_title.png" alt="">
              <div class="join">
                  入库成为平台专家人才
                  <i class="el-icon-d-arrow-right"></i>
              </div>
          </div>
      </div>
      <div class="wrap">
          <div class="search">
              <div class="search_box">
                  <div class="row">
                      <div class="label">专家姓名</div>
                      <input class="value_inp" type="text" placeholder="请输入专家姓名">
                  </div>
                  <div class="row">
                      <div class="label">研究方向</div>
                      <input class="value_inp" type="text" placeholder="请输入研究方向">
                  </div>
                  <div class="row">
                      <div class="label">工作单位</div>
                      <input class="value_inp" type="text" placeholder="请输入工作单位">
                  </div>
                  <div class="row">
                      <div class="label">技术职称</div>
                      <input class="value_inp" type="text" placeholder="请输入技术职称">
                  </div>
                  <div class="row">
                      <div class="label">专家类型</div>
                        <el-select class="value_inp" v-model="value" placeholder="请选择" clearable>
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                  </div>
              </div>
              <div class="search_btns">
                  <div class="search_btn">
                      搜索
                  </div>
                  <div class="clean_btn">
                      清空条件
                  </div>
              </div>
          </div>
          <div class="con">
              <div class="item_box">
                  <div class="left">
                    <img class="expert_pic" src="../../../assets/image/expert/expert_pic.png" alt="">
                  </div>
                  <div class="right">
                    <div class="name" @click="handleDetail">周心音</div>
                    <div class="row">
                        <div class="lable">技术职称：</div>
                        <div class="value">副教授</div>
                    </div>
                    <div class="row">
                        <div class="lable">工作单位：</div>
                        <div class="value">华南理工大学</div>
                    </div>
                    <div class="row">
                        <div class="lable">研究方向：</div>
                        <div class="value value3">基于网络环境的企业集成化管理，区域发展规划和企业基于网络环境的企业集成化管理，区域发展规划和企业基于网络环境的企业集得分是看库里申科俺就安静了积分哦据了解啊说的就...</div>
                    </div>
                  </div>
              </div>
          </div>
          <div class="page">
                <!-- 分页 -->
                <div class="pt_pagination">
                    <el-pagination
                    background
                    :page-sizes="[10, 20, 30, 50, 80, 100]"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-size= screenList.pageSize
                    prev-text="上一页"
                    next-text="下一页"
                    layout="prev, pager, next, slot, sizes"
                    :total="total">
                    <!-- jumper -->
                    <!-- <span>共 {{totalPage}} 页</span> -->
                    <!-- <el-button>跳转</el-button> -->
                    </el-pagination>
                    <!-- <el-button class="pagination_btn_to">跳转</el-button> -->
                </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'expertList',
    data () {
        return {
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value: '',
            currentPage: 0,
            total: 0,
            screenList: {}
        }
    },
    created () {

    },
    methods: {
        handleDetail () {
            this.$router.push({ path: '/expert/detail' })
        },
        // 分页
        handleSizeChange (val) {
            this.screenList.pageSize = val
            this.headleSearch()
        },
        handleCurrentChange (val) {
            this.screenList.pageIndex = val
            this.currentPage = val
            this.headleSearch(val)
        }
    }
}
</script>

<style lang='scss' scoped>
.expert-list{
    .header{
        background: url('../../../assets/image/expert/header_bg.png') no-repeat;
        width: 100%;
        height: 253px;
        background-size: cover;
        padding-top: 70px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        margin-bottom: 40px;
        .title{
            > img{
                width: 616px;
                height: auto;
                display: block;
            }
            .join{
                width: 237px;
                height: 36px;
                line-height: 38px;
                border: 1px solid #fff;
                margin: 40px auto;
                text-align: center;
                cursor: pointer;
                color: #fff;
                font-size: 18px;
                > i{
                    margin-left: 5px;
                }
            }
        }
    }
    .wrap{
        font-size: 14px;
        .search{
            width: 1200px;
            height: 224px;
            box-sizing: border-box;
            padding: 30px;
            background-color: #F9F9F9;
            border: 1px solid #E8E5F1;
            margin-bottom: 20px;
            .search_box{
                display: flex;
                flex-wrap: wrap;
                border-bottom: 1px solid #F2F2F2;
                margin-bottom: 20px;
                .row{
                    display: flex;
                    margin-right: 35px;
                    align-items: center;
                    margin-bottom: 20px;
                    .label{
                        width: 80px;
                    }
                    .value_inp{
                        height: 32px;
                        width: 195px;
                        border-radius: 4px;
                        padding: 0 10px;
                    }
                    .el-select{
                        width: 217px;
                        padding: 0;
                    }
                }
            }
            .search_btns{
                display: flex;
                .search_btn{
                    margin-right: 15px;
                    width: 90px;
                    height: 36px;
                    text-align: center;
                    line-height: 36px;
                    color: #fff;
                    background-color: #F94C15;
                    border-radius: 4px;
                }
                .clean_btn{
                    width: 90px;
                    height: 34px;
                    border: 1px solid #BDBDBD;
                    text-align: center;
                    line-height: 36px;
                    color: #828282;
                    border-radius: 4px;
                }
            }
        }
        .con{
            display: flex;
            flex-wrap: wrap;
            .item_box{
                margin-right: 20px;
                margin-bottom: 20px;
                padding: 20px;
                display: flex;
                border: 1px solid #E0E0E0;
                width: 590px;
                height: 230px;
                box-sizing: border-box;
                &:hover{
                    box-shadow: 0px 4px 15px rgba(0, 0, 0, .1);
                }
                .left{
                    margin-right: 20px;
                    > img{
                        width: 141px;
                        height: 190px;
                    }
                }
                .right{
                    .name{
                        line-height: 40px;
                        margin-bottom: 20px;
                        font-size: 20px;
                        font-weight: bold;
                        cursor: pointer;
                    }
                    .row{
                        display: flex;
                        margin-bottom: 10px;
                        font-size: 14px;
                        .lable{
                            color: #999;
                            width: 78px;
                        }
                        .value{
                            line-height: 21px;
                            width: 302px;
                        }
                        .value3{
                            text-overflow: -o-ellipsis-lastline;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 3;
                            line-clamp: 3;
                            -webkit-box-orient: vertical;
                        }
                    }
                }
            }
        }
        .page{
            text-align: center;
            margin: 30px;
        }
    }
}
</style>
<style lang='scss'>
.expert-list{
    .wrap{
        .search{
            .row{
                .value_inp{
                    .el-input__inner{
                        height: 34px;
                        line-height: 34px;
                    }
                    .el-input__icon{
                        line-height: 34px;
                    }
                }
            }
        }
    }
}
</style>
