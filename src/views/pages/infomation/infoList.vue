<template>
  <div class="infoList">
      <div class="wrap">
          <div class="title">产业资讯</div>
          <div class="con">
              <div class="con_box">
                  <div class="left">
                      <img src="@/assets/image/infomation/list_pic.png" alt="">
                  </div>
                  <div class="right">
                      <div class="name" @click="handleDetail">习近平在中央政治局第二十五次集体学习时强调 全面加强知识产权保护工作 激发创新活力推动构建...</div>
                      <div class="time">2021-08-09</div>
                      <div class="art">中共中央政治局11月30日下午就加强我国知识产权保护工作举行第二十五次集体学习。</div>
                      <div class="icon">
                          <img src="@/assets/image/infomation/icon.png" alt="">
                      </div>
                  </div>
              </div>
              <div class="con_box">
                  <div class="left">
                      <img src="@/assets/image/infomation/list_pic.png" alt="">
                  </div>
                  <div class="right">
                      <div class="name">习近平在中央政治局第二十五次集体学习时强调 全面加强知识产权保护工作 激发创新活力推动构建...</div>
                      <div class="time">2021-08-09</div>
                      <div class="art">中共中央政治局11月30日下午就加强我国知识产权保护工作举行第二十五次集体学习。</div>
                      <div class="icon">
                          <img src="@/assets/image/infomation/icon.png" alt="">
                      </div>
                  </div>
              </div>
              <div class="con_box">
                  <div class="left">
                      <img src="@/assets/image/infomation/list_pic.png" alt="">
                  </div>
                  <div class="right">
                      <div class="name">习近平在中央政治局第二十五次集体学习时强调 全面加强知识产权保护工作 激发创新活力推动构建...</div>
                      <div class="time">2021-08-09</div>
                      <div class="art">中共中央政治局11月30日下午就加强我国知识产权保护工作举行第二十五次集体学习。</div>
                      <div class="icon">
                          <img src="@/assets/image/infomation/icon.png" alt="">
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
    name: 'infoDetail',
    data () {
        return {
            currentPage: 0,
            total: 0,
            screenList: {}
        }
    },
    created () {

    },
    methods: {
        handleDetail () {
            this.$router.push({ path: '/infomation/detail' })
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
.infoList{
    padding: 30px 0 50px 0;
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
            margin-bottom: 30px;
        }
        .con{
            display: flex;
            flex-wrap: wrap;
            font-size: 14px;
            .con_box{
                margin-right: 20px;
                margin-bottom: 20px;
                &:nth-child(2n){
                    margin-right: 0px;
                }
                &:hover{
                    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
                }
                display: flex;
                border: 1px solid #E0E0E0;
                padding: 15px;
                box-sizing: border-box;
                width: 590px;
                height: 177px;
                .left{
                    margin-right: 12px;
                    > img{
                        width: 227px;
                        height: 147px;
                        display: block;
                    }
                }
                .right{
                    .name{
                        cursor: pointer;
                    }
                    .name, .art{
                        margin-bottom: 13px;
                        font-weight: bold;
                        line-height: 21px;
                        width: 320px;
                        word-break: break-all;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2; /* 这里是超出几行省略 */
                        overflow: hidden;
                    }
                    .time{
                        color: #999;
                        font-size: 12px;
                        margin-bottom: 13px;
                    }
                    .art{
                        color: #999;
                        font-size: 12px;
                        height: 40px;
                        font-weight: normal;
                    }
                    .icon{
                        display: flex;
                        justify-content: flex-end;
                        align-items: flex-end;
                        > img {
                            width: 30px;
                            height: 3px;
                            display: block;
                        }
                    }
                }
            }
        }
        .page{
            text-align: center;
            margin: 30px 0;
        }
    }
}
</style>
