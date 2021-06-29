<template>
  <div class="layout">
      <div>
          <Header></Header>
      </div>
      <div>
          <router-view class="content"/>
      </div>
      <div>
          <Footer></Footer>
      </div>
  </div>
</template>

<script>
import Header from './components/header'
import Footer from './components/footer'
export default {
    components: { Header, Footer },
    data () {
        return {
        }
    },
    created () {
    },
    methods: {
    }
}
</script>

<style lang='scss' scoped>
.layout{
    width: 100%;
    height: 100%;
    .content{
        min-height: 600px;
    }
}
</style>
