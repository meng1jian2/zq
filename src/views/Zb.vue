<template>
    <div class="all">
            <ul v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-immediate-check="false"
        infinite-scroll-distance="0">
                <li v-for="data in datarooms" :key="data.id" @click="chuanZhi(id)">
                    <img :src="data.bpic" alt="">
                    <div><span class="ba">{{data.title}}</span><span class="iconfont">&#xe66b;  {{data.online}}</span></div>
                    <p>{{data.nickname}}</p>
                </li>
            </ul>
        </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      datarooms: [],
      loading: false,
      current: 1,
      total: 1
    }
  },
  mounted () {
    axios({
      url: `/api/static/v2.1/live/list/20/1.json`
    }).then(res => {
      // console.log(res.data)
      this.datarooms = res.data.data.rooms
    })
  },
  methods: {
    chuanZhi (id) {
      this.$router.push(`/xq1/${id}`)
    },
    loadMore () {
      console.log('到底了,为什么不加载？？？？')
      this.loading = true

      if (this.total === this.datarooms.length) {
        return
      }

      this.current++
      axios({
        url: `/api/static/v2.1/live/list/20/${this.current}.json`
      }).then(res => {
        this.datarooms = [...this.datarooms, ...res.data.data.rooms]
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
    .all{margin-top: 88px; padding: 0 10px;
        ul{ display: flex; flex-wrap: wrap; justify-content: space-between;
            li{ width: 47.5%; height: 119.8px; margin-bottom: 10px; position: relative;
                img{width: 100%; height: 90.8px; border-radius: 5px;}
                div{ position: absolute; bottom: 30px; left: 10px;; color: #fff;
                    .ba{ width: 95.5px; line-height: 12px; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}
                    .iconfont{width: 40px; font-size: 12px; margin-left: 5px;}
                }
                p{color: #000;margin-top: 10px; height: 20px; font-size: 14px;}
            }
        }
    }
</style>
