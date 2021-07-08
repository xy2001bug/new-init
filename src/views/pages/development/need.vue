<template>
  <div class="need">
      <div class="wrap">
          <div class="hander">
            <div class="bread_txt">当前位置：</div>
            <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>技术开发需求对接</el-breadcrumb-item>
                <el-breadcrumb-item>提需求</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="title">提需求</div>
        <div class="con">
            <div class="con_box">
                <div class="left">
                    <div class="left1">
                        <div class="row">
                            <div class="label name"><span>姓</span><span>名</span></div>
                            <input class="need_inp" type="text" placeholder="请输入您的姓名">
                        </div>
                        <div class="row">
                            <div class="label">联系电话</div>
                            <input class="need_inp" type="text" placeholder="请输入您的联系方式">
                        </div>
                    </div>
                    <div class="row left2">
                        <div class="label">需求标题</div>
                        <input class="need_inp" type="text" placeholder="请输入您的需求标题">
                    </div>
                    <div class="left3">
                        <div class="row">
                            <div class="label">行业领域</div>
                            <el-select class="need_inp" v-model="value" placeholder="请选择" clearable>
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="row">
                            <div class="label">拟投资规模</div>
                            <input class="need_inp" type="text" placeholder="请输入您的联系方式">
                        </div>
                    </div>
                    <div class="row left4">
                        <div class="label">合作方式</div>
                        <el-select class="need_inp" v-model="value" placeholder="请选择" clearable>
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="right">
                    <div class="lable">需求描述</div>
                    <el-input class="value" resize='none' :rows="10" type="textarea" v-model="textarea" placeholder="请描述下您的需求"></el-input>
                </div>
            </div>
            <div class="btn">提交</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'need',
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
            textarea: ''
        }
    }
}
</script>

<style lang='scss' scoped>
.need{
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
        .con{
            padding: 40px 30px;
            border: 1px solid #e6e0e0;
            background-color: #F9F9F9;
            font-size: 14px;
            .con_box{
                display: flex;
                .left{
                    margin-right: 60px;
                    .row{
                        display: flex;
                        align-items: center;
                        margin-bottom: 30px;
                        .label{
                            width: 80px;
                            font-weight: bold;
                            &.name{
                                display: flex;
                                width: 56px;
                                justify-content: space-between;
                                padding-right: 24px;
                            }
                        }
                        input{
                            padding: 0 10px;
                        }
                        .need_inp{
                            height: 34px;
                            width: 170px;
                            box-sizing: border-box;
                            border-radius: 4px;
                        }
                    }
                    .left1, .left3{
                        display: flex;
                        > div:first-child{
                            margin-right: 30px;
                        }
                    }
                    .left2{
                        .need_inp{
                            width: 450px;
                        }
                    }
                    .left4{
                        .need_inp{
                            width: 450px;
                        }
                    }
                }
                .right{
                    display: flex;
                    .lable{
                        width: 80px;
                        line-height: 40px;
                    }
                    .value{
                        width: 476px;
                        height: 226px;
                    }
                }
            }
            .btn{
                width: 120px;
                height: 36px;
                margin: 30px auto;
                text-align: center;
                line-height: 36px;
                color: #fff;
                background: linear-gradient(134.01deg, #FD7082 -1.78%, #DB2D43 100%);
                cursor: pointer;
                border-radius: 2px;
            }
        }
    }
}
</style>
<style lang='scss'>
.need{
    .wrap{
        .con{
            .left{
                .row{
                    .need_inp{
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
}
</style>
