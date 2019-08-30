<template>
    <div class="all">
        <div class="box1">
            <img src="../assets/bf.png" alt="">
            <ul>
                <li><router-link to="/xq1/lt" tag="span" activeClass="myactive">聊天</router-link></li>
                <li><router-link to="/xq1/cb" tag="span" activeClass="myactive">主播</router-link></li>
            </ul>
        </div>
        <div class="box3">
            <div class="bb">
                <img src="../assets/lzq.jpg" alt="">
                <span>天生爱玩,游戏至上</span>
            </div>
            <a href="">APP观看</a>
        </div>
        <router-view/>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {

    }
  },
  mounted () {
    this.$store.state.isTabbarShow = false
    // console.log(this.$route.params.id)
    axios({
      url: `/api/static/v2.1/room/domain/${this.$route.params.id}.json`
    }).then(res => {

    })
  },
  beforeDestroy () {
    this.$store.state.isTabbarShow = true
  }
}
</script>

<style lang="scss" scoped>
    .all{
        .box1{ position: fixed; top: 0; background: #fff; position: fixed; top: 0; z-index: 100;
            img{width: 414px; height: 210.94px;}
            ul{ height: 35px; display: flex; border-bottom: 1px solid #999;
                li{ flex: 1; text-align: center; line-height: 35px;
                span{ display: block; width:38px; margin: auto;}
                }
                .myactive{color: #09a; border-bottom:1px solid #09a;}
            }
        }
        .box3{ height: 49px; position: fixed; bottom: 0; padding: 0 10px; width: 100%; background: #fff; z-index:100;
            .bb{ float: left; display: flex; text-align: center; line-height: 49px;
                img{ width: 50px; height: 26px; margin-top: 15px;}
                span{display: block; width: 129px; margin-left: 10px; font-size: 14px; color: #0ff;}
            }
            a{float: right; margin-right: 20px; display: inline-block; width: 68px; height: 26px; margin-top: 10px; background:linear-gradient( 40deg,#0ff, #09a); line-height: 26px; text-align: center; border-radius: 13px; color: #fff;}
        }
    }
</style>
