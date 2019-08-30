<template>
    <div class="box8">
        <ul v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-immediate-check="false"
        infinite-scroll-distance="0">
            <li class="l1" v-for="data in datalist" :key="data.id">
                <div class="all">
                    <img src="../assets/tx.jpg" alt="">
                    <div class="d1">
                        <p>{{data.nickname}}</p>
                        <p></p>
                    </div>
                    <div class="d2">
                        <i class="iconfont">&#xe620;</i><span>关注</span>
                    </div>
                </div>
                <a>{{data.content}}</a>
                <ul>
                    <li v-show="data.img[0]?true:false">
                        <img :src="data.img[0]">
                    </li>
                </ul>
                <div class="bb">
                    <div class="d3"><span class="iconfont">&#xe628;</span><i>{{data.comment}}</i></div>
                    <div class="d4"><span class="iconfont">&#xe6d1;</span><i>{{data.zan}}</i></div>
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
      url: `/api/touch/v2.2/anchorinformation/128/0/list/1/20.json`
    }).then(res => {
      console.log(res.data)
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
        url: `/api/touch/v2.2/anchorinformation/128/0/list/${this.current}/20.json`
      }).then(res => {
        this.datalist = [...this.datalist, ...res.data.data.list]
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
    .box8{margin-top: 88px;
        ul{
            .l1{ padding: 10px; background: #fff; margin-bottom: 10px;
                .all{ height: 43px; display: flex; position: relative;  margin-bottom: 20px;
                    img{ width: 43px; height: 43px; border-radius: 50%; margin-right: 10px;}
                    .d1{ height: 43px; font-size: 16px;
                        p{height: 23px; line-height: 23px;}
                    }
                    .d2{ width: 67px; height: 27px; border-radius: 18.5px; background:#f7f7f9; text-align: center; line-height: 27px; position: absolute; right: 0;
                        i{ color: #999; font-size: 12.5px; margin-right: 3px;}
                    }
                }
                a{ font-size: 14px;}
                >ul{ margin-bottom: 10px; margin-top: 10px;
                    >li{
                        img{ width: 113.66px; height: 113.66px;}
                    }
                }
                .bb{ display: flex; height: 24px; line-height: 24px; position: relative;
                    .d3{ color: #999; margin-right: 20px; position: absolute; right: 40px;
                        span{ font-size: 20px; margin-right: 5px;}
                        i{}
                    }
                    .d4{ color: #999; position: absolute; right: 0px;
                        span{ font-size: 20px; margin-right: 5px;}
                        i{}
                    }
                }
            }
        }
    }
</style>
