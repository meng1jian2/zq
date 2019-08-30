<template>
    <div class="box6">
        <ul v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-immediate-check="false"
        infinite-scroll-distance="0">
            <li v-for="data in datalist" :key="data.id">
                <img :src="data.bpic" alt="">
                <p>{{data.title}}</p>
                <span>{{data.nickname}}</span>
                <div class="all">
                    <a class="iconfont">&#xe77a;</a>
                    <a class="iconfont">&#xe628;  <i>{{data.commentCnt}}</i></a>
                    <a class="iconfont">&#xe6d1;  <i>{{data.zanCnt}}</i></a>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: [],
      loading: false,
      current: 1,
      total: 1
    }
  },
  mounted () {
    axios({
      url: `/api/static/v2.2/video/recommend/home.video.recommend/2/1/20.json`
    }).then(res => {
      // console.log(res.data)
      this.datalist = res.data.data
    })
  },
  methods: {
    loadMore () {
      console.log('到底了,为什么不加载？？？？')
      this.loading = true

      if (this.total === this.datalist.length) {
        return
      }

      this.current++
      axios({
        url: `/api/static/v2.2/video/recommend/home.video.recommend/2/${this.current}/20.json`
      }).then(res => {
        this.datalist = [...this.datalist, ...res.data.data]
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
    .box6{margin-top: 88px; background: #fff;
        ul{
            li{position: relative; margin-bottom: 10px;
                img{width: 100%; height: 205px;}
                p{position: absolute; top: 10px; color: #fff; text-indent: 5px; font-size: 14.5px;}
                span{position: absolute; bottom: 45px; color: #fff; margin-left: 10px;}
                .all{ display: flex; justify-content: space-around;
                    a{display: inline-block; margin-top: 10px; font-size: 20px; color: #999;
                        i{ font-size: 16px;}
                    }
                }
            }
        }
    }
</style>
