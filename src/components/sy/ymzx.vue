<template>
    <div>
        <div class="box3">
            <div class="bt">热门资讯<span class="iconfont">&#xe502;</span></div>
            <ul>
                <li v-for="data in datalist" :key="data.informationId">
                    <div>
                        <p>{{data.title}}</p>
                        <div><span class="iconfont">&#xe608;    {{data.view}}</span><i class="iconfont">&#xe66f;    {{data.comment}}</i></div>
                    </div>
                    <img :src="data.cover">
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
      datalist: []
    }
  },
  mounted () {
    axios({
      url: `/api/static/v2.2/information/1/0/1/3.json`
    }).then(res => {
      // console.log(res.data)
      this.datalist = res.data.data.list
    })
  }
}
</script>

<style lang="scss" scoped>
    .box3{ margin-top: 10px;
        .bt{height: 40px; border-bottom: 1px solid #eee;  padding: 0 10px; line-height: 40px; font-size: 14px; font-weight: bold; background: #fff;
            span{float: right; font-size: 14px;}
        }
        ul{
            li{ background: #fff; margin-bottom: 10px; height: 84px; padding: 0 10px; padding-top: 10px; display: flex; justify-content: space-between;
                div{ width: 230px; height: 40px; color: #000; font-size: 14px; margin-right: 15px;
                    p{}
                    div{ margin-top: 20px;
                        span{ font-size: 14px; color: #999; margin-right: 10px;}
                        i{font-size: 14px; color: #999;}

                    }
                }
                img{ width: 110px; height: 74px;}
            }
        }
    }
</style>
