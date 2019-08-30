<template>
    <div class="all">
        <div class="box">
            <img src="../../assets/tx2.png">
            <div class="kk">
                <p>{{datalist1.nickname}}</p>
                <div class="kz">
                    <i>正在直播： </i>
                    <em>{{datalist1.newGameName}}</em>
                    <a class="iconfont">&#xe66b;{{datalist1.online}}</a>
                </div>
            </div>
            <span class="iconfont">&#xe620;关注</span>
        </div>
        <div class="box2">
            <div class="bb">
                <span>主播视频</span><span>粉丝录制</span>
            </div>
            <ul>
                <li v-for="data in datalist2" :key="data.id">
                    <img :src="data.bpic" alt="">
                    <div class="ka">
                        <span>{{data.nickname}}</span><em> <i>{{data.playCnt}}</i></em>
                    </div>
                    <p>{{data.title}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist1: [],
      datalist2: []
    }
  },
  mounted () {
    axios({
      url: `/api/static/v2.1/room/domain/873067041.json`
    }).then(res => {
      console.log(res.data)
      this.datalist1 = res.data.data
    })
    axios({
      url: `/api/static/v2.2/video/403067277/20/1/new.json`
    }).then(res => {
      console.log(res.data)
      console.log('==============')
      this.datalist2 = res.data.data.data
    })
  }
}
</script>

<style lang="scss" scoped>
    .all{padding-top: 250px;
        .box{ padding: 10px; display: flex; height: 60px; margin-bottom: 5px; background: #fff;
            img{width: 58px; height: 58px; margin-right: 10px;}
            .kk{ width: 263px; height: 53px;
                p{ height: 21px; line-height: 21px; font-size: 14px; color: #000;}
                .kz{ height: 16px; margin-top: 10px; color: #999;
                    i{font-size: 12px;}
                    em{font-size: 12px;}
                    a{font-size: 12px; float: right; margin-right: 20px;}
                }
            }
            span{ width: 67px; height: 27px; background: #da4136; font-size: 14px; border-radius: 16.5px; color: #fff; text-align: center; line-height: 27px;}
        }
        .box2{ background: #fff; padding: 10px;
            .bb{display: flex;
                span{ flex: 1; text-align: center; height: 35px; display:inline-block; line-height: 35px;}
            }
            ul{ display: flex; flex-wrap: wrap; justify-content: space-between;
                li{ position:relative; margin-bottom: 10px;
                    img{ width: 189px; height: 120px;}
                    .ka{ position: absolute; bottom: 30px; color: #fff;
                        span{}
                        i{
                            em{}
                        }
                    }
                    p{ width: 187px; height: 20px; line-height: 20px; white-space: nowrap; overflow: hidden; font-size: 14px; color: #000; margin-top: 10px;}
                }
            }
        }
    }
</style>
