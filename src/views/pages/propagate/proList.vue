<template>
  <div class="proList">
      <div class="wrap">
          <div class="notice">
              <div class="title">宣传通知</div>
              <div class="notice_box">
                  <div class="row" @click="linkNotice">
                      <div class="time">2020-09-09</div>
                      <div class="text">苹果联合创始人沃兹尼亚克因涉嫌侵犯 “Woz U ”版权而被起诉</div>
                  </div>
                  <div class="row">
                      <div class="time">2020-09-09</div>
                      <div class="text">国务院这个重要会议强调推动在知识产权保护等方面实行更高标...</div>
                  </div>
                  <div class="page">
                    <!-- 分页 -->
                    <div class="pt_pagination">
                        <el-pagination
                        background
                        @current-change="handleCurrentChange1"
                        :current-page="currentPage1"
                        :page-size= screenList1.pageSize
                        prev-text="上一页"
                        next-text="下一页"
                        layout="prev, pager, next"
                        :total="total1">
                        </el-pagination>
                    </div>
                  </div>
              </div>
          </div>
          <div class="train">
              <div class="title train_t">宣传通讯稿</div>
              <div class="train_box">
                  <div class="row" @click="linkTrain">
                      <div class="left">
                          <img src="@/assets/image/propagete/train_pic.png" alt="">
                      </div>
                      <div class="right">
                          <div class="name">
                              市局举办2021年东莞市知识产权系列培训（第一期）
                          </div>
                          <div class="time">
                              发布时间：2021-08-05
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="left">
                          <img src="@/assets/image/propagete/train_pic.png" alt="">
                      </div>
                      <div class="right">
                          <div class="name">
                              市局举办2021年东莞市知识产权系列培训（第一期）
                          </div>
                          <div class="time">
                              发布时间：2021-08-05
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="left">
                          <img src="@/assets/image/propagete/train_pic.png" alt="">
                      </div>
                      <div class="right">
                          <div class="name">
                              市局举办2021年东莞市知识产权系列培训（第一期）
                          </div>
                          <div class="time">
                              发布时间：2021-08-05
                          </div>
                      </div>
                  </div>
                  <div class="page">
                    <!-- 分页 -->
                    <div class="pt_pagination">
                        <el-pagination
                        background
                        @current-change="handleCurrentChange1"
                        :current-page="currentPage1"
                        :page-size= screenList1.pageSize
                        prev-text="上一页"
                        next-text="下一页"
                        layout="prev, pager, next"
                        :total="total1">
                        </el-pagination>
                    </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'proList',
    data () {
        return {
            screenList1: {},
            currentPage1: 1,
            total1: 0
        }
    },
    created () {

    },
    methods: {
        linkNotice () {
            this.$router.push({ path: '/propagate/noticeDetail' })
        },
        linkTrain () {
            this.$router.push({ path: '/propagate/trainDetail' })
        },
        handleCurrentChange1 (val) {
            this.screenList1.pageIndex = val
            this.currentPage1 = val
            this.headleSearch(val)
        }
    }
}
</script>

<style lang='scss' scoped>
.proList{
    padding: 45px 0;
    .wrap{
        display: flex;
        font-size: 14px;
        .title{
            width: 580px;
            box-sizing: border-box;
            height: 51px;
            background-color: #fff;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            line-height: 51px;
            border-left: 9px solid #F94C15;
            padding-left: 20px;
            margin-bottom: 20px;
            &.train_t{
                border-left: 9px solid #2F80ED;
            }
        }
        .notice{
            margin-right: 40px;
            .notice_box{
                box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
                padding: 10px 30px;
                .row{
                    border-bottom: 1px solid #F2F2F2;
                    display: flex;
                    align-items: center;
                    height: 54px;
                    .time{
                        color: #999;
                        margin-right: 22px;
                    }
                    .text{
                        width: 400px;
                        font-weight: bold;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        cursor: pointer;
                        &:hover{
                            color: #F94C15;
                        }
                    }
                }
            }
        }
        .train{
            box-sizing: border-box;
            .train_box{
                box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
                padding: 30px;
                .row{
                    display: flex;
                    margin-bottom: 20px;
                    .left{
                        margin-right: 20px;
                        > img{
                            width: 110px;
                            height: 68px;
                            display: block;
                        }
                    }
                    .right{
                        padding: 6px 0;
                        .name{
                            width: 390px;
                            margin-bottom: 15px;
                            font-weight: bold;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            cursor: pointer;
                            &:hover{
                                color: #F94C15;
                            }
                        }
                        .time{
                            color: #999;
                            font-size: 12px ;
                        }
                    }
                }
            }
        }
        .page{
            display: flex;
            justify-content: flex-end;
            margin: 20px 0;
        }
    }
}
</style>
