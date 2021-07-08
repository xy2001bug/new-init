<template>
  <div class="technology">
      <div class="wrap">
        <div class="hander">
            <div class="bread_txt">当前位置：</div>
            <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>技术开发需求对接</el-breadcrumb-item>
                <el-breadcrumb-item >找技术</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="title">找技术</div>
        <div class="search">
            <div class="row_box">
                <div class="lable">技术名称</div>
                <input class="value_inp" type="text" placeholder="请输入需求名称">
            </div>
            <div class="row_box">
                <div class="lable">技术名称</div>
                <el-select class="value_inp" v-model="value" placeholder="请选择" clearable>
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="row_box">
                <div class="lable">技术名称</div>
                <el-select class="value_inp" v-model="value" placeholder="请选择" clearable>
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="btn">搜索</div>
        </div>
        <div class="con">
            <div class="header">
                <div class="col1">技术名称</div>
                <div class="col2">行业领域</div>
                <div class="col3">合作方式</div>
            </div>
            <div class="body">
                <div class="col_box">
                    <div class="col1" @click="linkDetail({})">技术名称</div>
                    <div class="col2">行业领域</div>
                    <div class="col3">合作方式</div>
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
    name: 'technolopy',
    data () {
        return {
            currentPage: 0,
            total: 0,
            screenList: {},
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
            value: ''
        }
    },
    created () {

    },
    methods: {
        linkDetail (item) {
            this.$router.push({ path: '/development/technologyDetail?id=' + item.id })
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
.technology{
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
            margin-bottom: 20px;
        }
        .search{
            display: flex;
            width: 1200px;
            height: 70px;
            box-sizing: border-box;
            background-color:  #F9F9F9;
            border: 1px solid #E8E5F1;
            align-items: center;
            padding: 0 50px 0 30px;
            font-size: 14px;
            margin-bottom: 10px;
            .row_box{
                display: flex;
                margin-right: 50px;
                align-items: center;
                .lable{
                    width: 70px;
                }
                .value_inp{
                    width: 210px;
                    height: 36px;
                    padding: 0 10px;
                    border-radius: 4px;
                    box-sizing: border-box;
                }
            }
            .btn{
                width: 73px;
                height: 36px;
                color: #fff;
                text-align: center;
                line-height: 36px;
                border-radius: 2px;
                background: linear-gradient(134.01deg, #FD7082 -1.78%, #DB2D43 100%);
                cursor: pointer;
            }
        }
        .con{
            border: 1px solid #E8E5F1;
            font-size: 14px;
            .col1{
                width: 526px;
                border-right: 1px solid #E8E5F1;
            }
            .col2{
                width: 277px;
                border-right: 1px solid #E8E5F1;
            }
            .col3{
                width: 385px;
            }
            .header{
                display: flex;
                height: 46px;
                line-height: 46px;
                text-align: center;
                background-color: #F9F9F9;
                font-weight: bold;
            }
            .body{
                .col_box{
                    display: flex;
                    text-align: center;
                    height: 46px;
                    line-height: 46px;
                    border-bottom: 1px solid #E8E5F1;
                    .col1{
                        cursor: pointer;
                        color: #128BED;
                    }
                    &:last-child{
                        border-bottom: none;
                    }
                }
            }
        }
        .page{
            text-align: center;
            margin: 30px auto;
        }
    }
}
</style>
<style lang='scss'>
.technology{
    .wrap{
        .search{
            .row_box{
                .value_inp{
                    .el-input__inner{
                        height: 36px;
                        line-height: 36px;
                    }
                    .el-input__icon{
                        line-height: 36px;
                    }
                }
            }
        }
    }
}
</style>
