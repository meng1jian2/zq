<template>
    <div class="box4">
        <div>热门直播<span class="iconfont">&#xe502;</span></div>
        <ul>
            <li v-for="(data,index) in datalive.slice(0,4)" :key="index" @click="chuanZhi(data.id)">
                <img :src="data.bpic">
                <span><em>{{data.nickname}}</em><i class="iconfont">&#xe66b;  {{data.online}}</i></span>
                <p>{{data.title}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalive: []
    }
  },
  mounted () {
    axios({
      url: `/api/static/v2.1/main/all/ios.json`
    }).then(res => {
      // console.log(res.data)
      this.datalive = res.data.data.live
    })
  },
  methods: {
    chuanZhi (id) {
      this.$router.push(`/xq1/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
    .box4{ background: #fff;
        div{ height: 40px; line-height: 40px; font-size: 15px; color: #000; font-weight: bold;  padding: 0 10px;
            span{ float: right; font-size: 14px;}
        }
        ul{ width: 100%; display: flex; flex-wrap:wrap; justify-content: space-around; background: #fff;
            li{ width: 45.2%; height: 119.8px; position: relative; margin-bottom: 10px;
                img{ width: 100%; height: 90.8px; border-radius: 5px;}
                span{ position: absolute; top: 70px; left: 10px; color: #fff; font-size: 12px; font-weight: 100;
                    em{margin-right: 10px;}
                    i{ font-size: 12px;}
                }
                p{height: 20px; line-height: 20px; font-size: 12px; color: #000; margin-top: 10px;}
            }
        }
    }
</style>
