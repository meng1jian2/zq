<template>
  <div id="app">
    <daohang v-show="$store.state.isTabbarShow"></daohang>
    <router-view/>
  </div>
</template>

<script>
// import axios from 'axios'
import daohang from '@/components/Daohang'
export default {
  data () {
    return {
      isTabbarShow: true

    }
  },
  components: {
    daohang
  },
  mounted () {
    console.log(this.$store.state.isTabbarShow)
  }
}
</script>

<style lang="scss">
*{margin: 0; padding: 0;}
ul{list-style: none;}
html,body{height: 100%; width: 100%;}
html{font-family: "微软雅黑"; font-size: 12px; color: #333; background: #f2f2f2;}
a{text-decoration: none;}
i,em{font-style:normal}
img{display: block;}
</style>
