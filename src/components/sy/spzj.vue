<template>
    <div class="box5">
        <div>视频专辑</div>
        <ul>
            <li v-for="(data,index) in datavideo.slice(0,3)" :key="index">
                <img :src="data.imageUrl">
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
      datavideo: []
    }
  },
  mounted () {
    axios({
      url: `/api/static/v2.1/main/all/ios.json`
    }).then(res => {
      // console.log(res.data)
      // console.log("==============")
      this.datavideo = res.data.data.video.recommends
    })
  }
}
</script>

<style lang="scss" scoped>
    .box5{ background: #fff; margin-top: 10px;
        div{ height: 40px; line-height: 40px; font-size: 15px; color: #000; padding: 0 10px; font-weight: bold;}
        ul{ display: flex; justify-content: space-around;
            li{ margin-bottom: 10px; text-align: center;
                img{ width: 111px; height: 150px;}
                p{width: 111px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-top: 10px; color: #000;}
            }
        }
    }
</style>
