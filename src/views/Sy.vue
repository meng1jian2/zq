<template>
    <div class="all">
        <div class="box1">
            <swiper :key="looplist" ref="myswiper">
                <div class="swiper-slide" v-for="data in looplist" :key="data.id">
                    <img :src="data.spic">
                </div>
            </swiper>
        </div>
        <div class="box2">
            <div>话题</div>
            <ul>
                <li v-for="data in looplist2" :key="data.id">
                    <img :src="data.logo" alt="">
                    <span><a>#{{data.title}}#</a><br/><a>{{data.number}}人数参与</a></span>
                </li>
            </ul>
        </div>
        <ymzx></ymzx>
        <ymzb></ymzb>
        <spzj></spzj>
    </div>
</template>

<script>
import axios from 'axios'
import swiper from '../components/Swiper'
import ymzx from '../components/sy/ymzx'
import ymzb from '../components/sy/ymzb'
import spzj from '../components/sy/spzj'

export default {
  data () {
    return {
      looplist: [],
      looplist2: [],
      looplist3: []
    }
  },
  mounted () {
    axios({
      url: `/api/static/v2.1/main/all/ios.json`
    }).then(res => {
      // console.log(res.data)
      this.looplist = res.data.data.banner
      this.looplist2 = res.data.data.topic
      // console.log("===================")
    })
    // axios({
    //     url:`/api/static/v2.2/information/1/0/1/3.json`
    // }).then(res => {
    //     console.log(res.data)
    //     this.looplist3 = res.data.data
    // })
  },
  components: {
    swiper,
    ymzx,
    ymzb,
    spzj
  }
}
</script>

<style lang="scss" scoped>
    .box2{ padding: 0 10px; background: #fff;
        div{height:40px; font-size: 15px; color: #333; font-weight: bold; line-height: 40px;}
        ul{ height: 82px; display: flex; justify-content: space-between; text-align: center;
            li{ width: 111px; height: 70px; position: relative; border-radius: 5px;
            img{width: 111px; height: 70px; border-radius: 5px;}
            span{position: absolute; background: rgba(0, 0, 0, .7); width: 111px; height: 55px; z-index: 1; left: 0; top: 0; color: #fff; padding-top: 15px; border-radius: 5px;}
            }
        }
    }
</style>
