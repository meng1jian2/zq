<template>
    <div class="all">
        <div class="sang">
            <h1><img src="../assets/zq.png" alt="logo"></h1>
            <ul>
                <li class="i1"><span class="iconfont">&#xe617;</span></li>
                <li class="i2"><a>充值</a></li>
                <li class="i3"><a>打开APP</a></li>
            </ul>
        </div>
        <div class="xia">
            <!-- <ul>
                <li v-for="(data,index) in datalist" :key="index" :class="currentIndex===index?'active':''" @click="handleClick(index)">{{data}}</li>
            </ul> -->
            <!-- <ul class="db" :class="currentIndex2===index?'active2':''">
                <li></li>
            </ul> -->
            <ul>
                <router-link to="/sy" tag="li" activeClass="myactive">首页</router-link>
                <router-link to="/ss" tag="li" activeClass="myactive">赛事</router-link>
                <router-link to="/zb" tag="li" activeClass="myactive">直播</router-link>
                <router-link to="/sp" tag="li" activeClass="myactive">视频</router-link>
                <router-link to="/zx" tag="li" activeClass="myactive">资讯</router-link>
                <router-link to="/tz" tag="li" activeClass="myactive">帖子</router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      dc: false
    }
  },
  methods: {
    handleClick () {
      console.log('click')
      this.dc = !this.dc
    }
  }
}
</script>

<style lang="scss" scoped>

.all{height: 88px; background: #f2f2f2; overflow:hidden; position: fixed; top: 0px; z-index: 10; width:100%;
    .sang{height: 44px; padding: 0 10px; margin-bottom: 10px; display: flex; justify-content: space-between;
        h1{
            img{width: 75px;}
            }
        ul{
            li{float: left; line-height: 28px; text-align: center; margin-left: 10px;
                span{font-size: 24px; font-weight: bold; color: #999;}
                a{ display: inline-block; border-radius: 5px;}
            }
            .i1{width: 30px; margin-top: 7px;}
            .i2{width: 58px; height: 28px; border: 1px solid #da4136; border-radius: 15px; margin-top: 7px; font-size: 16px; color: #da4136}
            .i3{width: 93px; height: 28px; border: 1px solid #da4136; border-radius: 15px; margin-top: 7px; font-size: 16px; color: #fff; background: #da4136}
        }
    }
    .xia{height: 31px;padding: 0 10px;
        ul{ text-align: center; white-space: nowrap; display: flex;
            li{width: 57px; height: 25px; font-size: 14px; float: left; color: #999;
            }
            .myactive{
                color: #000; font-size:16px; font-weight: bold; border-bottom: 1px solid #000;
            }
        }
    }
}

</style>
