<template>
  <div class="companyList">
      <div class="wrap">
          <div class="title">
              <div class="name">对接单位展示</div>
              <div class="link">单位入驻申请<i class="el-icon-d-arrow-right"></i></div>
          </div>
          <div class="con">
              <div class="con_box">
                  <div class="box_img">
                      <img src="@/assets/image/company/pic.png" alt="">
                  </div>
                  <div class="name">广东高航知识产权代理公司</div>
              </div>
              <div class="con_box">
                  <div class="box_img">
                      <img src="@/assets/image/company/pic.png" alt="">
                  </div>
                  <div class="name">广东高航知识产权代理公司</div>
              </div>
              <div class="con_box">
                  <div class="box_img">
                      <img src="@/assets/image/company/pic.png" alt="">
                  </div>
                  <div class="name">广东高航知识产权代理公司</div>
              </div>
              <div class="con_box">
                  <div class="box_img">
                      <img src="@/assets/image/company/pic.png" alt="">
                  </div>
                  <div class="name">广东高航知识产权代理公司</div>
              </div>
              <div class="con_box">
                  <div class="box_img">
                      <img src="@/assets/image/company/pic.png" alt="">
                  </div>
                  <div class="name">广东高航知识产权代理公司</div>
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
    name: 'companyList',
    data () {
        return {
            currentPage: 0,
            total: 0,
            screenList: {}
        }
    },
    methods: {
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
.companyList{
    padding: 40px;
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
            display: flex;
            justify-content: space-between;
            .link{
                margin-right: 30px;
                text-decoration: underline;
                color: #2F80ED;
                cursor: pointer;
            }
        }
        .con{
            display: flex;
            margin-top: 60px;
            flex-wrap: wrap;
            .con_box{
                margin-right: 20px;
                margin-bottom: 60px;
                text-align: center;
                &:nth-child(4n){
                    margin-right: 0;
                }
                .box_img{
                    border: 1px solid #E0E0E0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 285px;
                    height: 145px;
                    margin-bottom: 20px;
                    box-sizing: border-box;
                    cursor: pointer;
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
