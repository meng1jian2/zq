<template>
    <div class="box">
        <div class="all" v-for="data in datalist" :key="data.id">
            <img :src="data.banner" alt="">
            <div class="xk">
                <p>{{data.name}}</p>
                <div class="bbo">
                    <div class="b1">游戏 : <span>{{data.gameName}}</span></div>
                    <div class="b2">时间 : <em><span>{{data.applyStartTime}}</span><a>~</a><span>{{data.endTime}}</span></em></div>
                    <div class="b3"><i :class="data.type===1?'ii':''"></i><span>正在比赛</span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: []

    }
  },
  mounted () {
    axios({
      url: `/api/static/v2.1/match/list/0/0/1/20.json`
    }).then(res => {
      // console.log(res.data)
      this.datalist = res.data.data.list
    })
  }
}
</script>

<style lang="scss" scoped>
    .box{margin-top: 88px; padding: 0 10px;
        .all{background: #fff;
            img{height: 84.09px; width: 100%; border-radius: 5px 5px 0 0;}
            .xk{ padding: 10px;
                p{height: 23px; line-height: 23px; margin-bottom: 5px; font-size: 16px; color:#000; font-weight: bold;}
                .bbo{ height: 39px; position: relative;
                    .b1{ width: 127px; height: 17px; line-height: 17px; margin-bottom: 5px; color: #999;
                        span{color: #000;}
                    }
                    .b2{ height: 17px; margin-bottom: 5px; color: #999; position: relative;
                        em{ position: absolute; margin-left: 3px;
                            span{width: 70px; display: inline-block; white-space: nowrap; overflow: hidden; color: #000;}
                            a{position: relative; top: -4px; }
                        }
                    }
                    .b3{ position: absolute; bottom: 0px; right: 0px;
                        i{display: inline-block; width: 9px; height: 9px; background: #f00; margin-right: 5px;}
                        span{color: #999; font-size: 12px;}
                        .ii{background: #999;}
                    }
                }
            }
        }
    }
</style>
