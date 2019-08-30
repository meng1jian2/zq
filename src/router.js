import Vue from 'vue'
import Router from 'vue-router'
import Sp from '@/views/Sp'
import Ss from '@/views/Ss'
import Sy from '@/views/Sy'
import Lt from '@/views/Xq1/Lt'
import Cb from '@/views/Xq1/Cb'
import Tz from '@/views/Tz'
import Zb from '@/views/Zb'
import Zx from '@/views/Zx'
import Xq1 from '@/views/Xq1'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/sy',
      component: Sy
    },
    {
      path: '/ss',
      component: Ss
    },
    {
      path: '/zb',
      component: Zb
    },
    {
      path: '/sp',
      component: Sp
    },
    {
      path: '/zx',
      component: Zx
    },
    {
      path: '/tz',
      component: Tz
    },
    {
      name: 'mm',
      path: '/xq1/:id',
      component: Xq1,
      children: [
        {
          path: '/xq1/lt',
          component: Lt
        },
        {
          path: '/xq1/cb',
          component: Cb
        },
        {
          path: '/xq1/:id',
          redirect: '/xq1/lt'
        }
      ]
    },
    {
      path: '/',
      redirect: '/sy'
    }
  ]
})

export default router
