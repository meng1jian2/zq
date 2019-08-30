<template>
    <div class="box7">
        <ul v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-immediate-check="false"
        infinite-scroll-distance="0">
            <li v-for="data in datalist" :key="data.informationId">
                <div class="all">
                    <p>{{data.title}}</p>
                    <div class="b1">
                        <span class="iconfont">&#xe608;  {{data.view}}</span><span class="iconfont">&#xe66f;  {{data.comment}}</span>
                        <a v-show="data.isTop==='1'?true:false">置顶</a>
                    </div>
                </div>
                <img :src="data.cover[0]" alt="">
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
      url: `/api/static/v2.2/information/1/0/1/20.json`
    }).then(res => {
      // console.log(res.data)
      this.datalist = res.data.data.list
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
        url: `/api/static/v2.2/information/1/0/${this.current}/20.json`
      }).then(res => {
        this.datalist = [...this.datalist, ...res.data.data.list]
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
    .box7{margin-top: 88px;
        ul{
            li{ height: 94px; margin-bottom: 10px; padding: 10px; display: flex; justify-content: space-between; background: #fff;
                .all{ width: 230px; height: 74.5px;
                    p{ width: 230px; height: 40px; font-size: 14px;}
                    .b1{ margin-top: 20px;
                        span{ font-size: 12px; color: #999; margin-right: 5px;}
                        a{ width: 40px; height: 18px; background: #da4136; color: #fff; font-size: 12px; display: inline-block; text-align: center; border-radius: 2px; float: right;}
                    }
                }
                img{ width: 110px; height: 74px;}
            }
        }
    }
</style>
