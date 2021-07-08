<template>
  <div class="header">
      <div class="wrap">
          <div class="top">
            <div class="left">
                <img class="logo_pic" src="../../../assets/image/header/logo.png" alt="logo">
                <div class="gun"></div>
                <img class="title_pic" src="../../../assets/image/header/title.png" alt="">
            </div>
            <div class="right">
                <img class="right-icon" src="../../../assets/image/header/icons.png" alt="">
                <div class="tips">关注公众号，了解更多产业资讯！</div>
                <div class="code">
                    <img class="code_pic" src="../../../assets/image/header/code.png" alt="">
                </div>
            </div>
        </div>
      </div>
      <div class="nav">
          <div class="wrap">
              <div class="nav_box">
                <div class="nav_item" v-for="(item, index) in nav" :key="index"
                :class="{'active': item.active,'nav_hover': item.title!=='技术开发需求对接'&&item.title!=='专利产业对接','show_child':item.title==='技术开发需求对接'||item.title==='专利产业对接'}" @click="handleTab(item)">
                    {{ item.title }}
                    <div class="child_box" :class="{'child_box2':item.title==='专利产业对接'}">
                        <div class="child_item" v-for="(itemSub) in item.children" :key="itemSub.title" @click.stop="handleSub(itemSub)">
                            {{ itemSub.title }}
                        </div>
                    </div>
                </div>
              </div>
          </div>
          <div class="nav_bg nav_bg1">
          </div>
          <div class="nav_bg nav_bg2">
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Header',
    data () {
        return {
            nav: [
                { title: '首页', active: true, path: '/' },
                { title: '专利运营', active: false, path: '/pt/list' },
                { title: '专家人才库', active: false, path: '/expert/list' },
                {
                    title: '技术开发需求对接',
                    active: false,
                    path: '/development/technology',
                    children: [
                        { title: '找技术', active: false, path: '/development/technology' },
                        { title: '提需求', active: false, path: '/development/need' }
                    ]
                },
                { title: '咨询服务', active: false, path: '/consult/index' },
                { title: '产业导航', active: false, path: '' },
                { title: '产业资讯', active: false, path: '/infomation/list' },
                { title: '宣传培训', active: false, path: '/propagate/list' },
                {
                    title: '专利产业对接',
                    active: false,
                    path: '/company/companyList',
                    children: [
                        { title: '对接单位展示', active: false, path: '/company/companyList' },
                        { title: '单位入驻申请', active: false, path: '/company/requirement' }
                    ]
                },
                { title: '关于我们', active: false, path: '/about' }
            ]
        }
    },
    watch: {
        $route: {
            handler (newValue, oldValue) {
                console.log('newValue', newValue)
                this.nav.forEach(item => {
                    item.active = false
                })
                if (newValue.name === 'home') {
                    this.nav[0].active = true
                }
                if (newValue.path.indexOf('/pt') !== -1) {
                    this.nav[1].active = true
                }
                if (newValue.path.indexOf('/expert') !== -1) {
                    this.nav[2].active = true
                }
                if (newValue.path.indexOf('/development') !== -1) {
                    this.nav[3].active = true
                }
                if (newValue.path.indexOf('/consult') !== -1) {
                    this.nav[4].active = true
                }
                if (newValue.path.indexOf('/infomation') !== -1) {
                    this.nav[6].active = true
                }
                if (newValue.path.indexOf('/propagate') !== -1) {
                    this.nav[7].active = true
                }
                if (newValue.path.indexOf('/company') !== -1) {
                    this.nav[8].active = true
                }
                if (newValue.path.indexOf('/about') !== -1) {
                    this.nav[9].active = true
                }
            },
            immediate: true,
            deep: true
        }
    },
    methods: {
        handleSub (sub) {
            this.$router.push({ path: sub.path })
        },
        handleTab (item) {
            this.nav.forEach(item => {
                item.active = false
            })
            item.active = true
            this.$router.push({ path: item.path })
        }
    }

}
</script>

<style lang='scss' scoped>
.header{
    width: 100%;
    img{
        display: block;
    }
    .top{
        display: flex;
        height: 84px;
        align-items: center;
        justify-content: space-between;
        .left{
            display: flex;
            align-items: center;
            cursor: pointer;
            .logo_pic{
                width: 112px;
                height: 40px;
            }
            .gun{
                height: 30px;
                margin: 0 10px;
                border-left: 1px solid #E0E0E0;
            }
        }
        .right{
            display: flex;
            padding: 10px;
            cursor: pointer;
            align-items: center;
            position: relative;
            .code{
                position: absolute;
                left: 80px;
                top: 40px;
                background-color: #fff;
                border-radius: 4px;
                box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
                display: none;
                .code_pic{
                    width: 80px;
                    height: 80px;
                }
            }
            &:hover{
                .code{
                    display: block;
                    z-index: 9;
                }
            }
            > img{
                width: 20px;
                height: 20px;
                margin-right: 5px;
            }
        }
    }
    .nav{
        width: 100%;
        height: 73px;
        background: linear-gradient(90deg, #D4161A 0%, #F7383C 100%);
        position: relative;
        .nav_box{
            display: flex;
            height: 73px;
            align-items: center;
            width: 1200px;
            justify-content: center;
            .nav_item{
                margin: 0 19px;
                color: #fff;
                font-size: 18px;
                cursor: pointer;
                height: 72px;
                line-height: 72px;
                box-sizing: border-box;
                &.active{
                    color: #FFE500;
                    font-weight: bold;
                    border-bottom: 5px solid #FFE500;
                }
            }
            .nav_hover{
                &:hover{
                    color: #FFE500;
                    font-weight: bold;
                    border-bottom: 5px solid #FFE500;
                }
            }
            .show_child{
                position: relative;
                &:hover{
                    .child_box{
                        display: block;
                    }
                }
                .child_box{
                    position: absolute;
                    width: 100%;
                    background-color: #fff;
                    text-align: center;
                    padding: 10px 0;
                    color: #666;
                    top: 72px;
                    left: 0;
                    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
                    display: none;
                    z-index: 99;
                    .child_item{
                        height: 50px;
                        line-height: 50px;
                        font-weight: 400;
                        &:hover{
                            color: #fff;
                            background-color: $mainColor;
                        }
                    }
                    &.child_box2{
                        width: 120%;
                        left: -10%;
                    }
                }
            }
        }
        .nav_bg{
            position: absolute;
            top: 0;
            height: 73px;
            width: 358px;
            opacity: .5;
        }
        .nav_bg1{
            background: url('../../../assets/image/header/nav_bg1.png') no-repeat;
            left: 0;
            transform: scale(180deg);
        }
        .nav_bg2{
            background: url('../../../assets/image/header/nav_bg2.png') no-repeat;
            right: 0;
        }
    }
}
</style>
