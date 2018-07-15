import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/Params'
import Error from '@/components/Error'
import Count from '@/components/Count'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      // component: HelloWorld
      components: {
        default: HelloWorld,
        left: Hi1,
        right: Hi2
      }
    },
    {
      path: '/hi',
      // name: 'Hi',
      component: Hi,
      children: [
        {
          path: '/',
          component: Hi,
          name: 'hi'
        },
        {
          path: 'hi1',
          component: Hi1,
          name: 'hi1'
        },
        {
          path: 'hi2',
          component: Hi2,
          name: 'hi2',
          alias: '/zhh'
        }
      ]
    },
    {
      path: '/params/:newsId/:newsTitle',
      component: Params,
      beforeEnter: (to, from, next) => {
        console.log('我进入了params模板。')
        console.log(to)
        console.log(from)
        next()
      },
      beforeRouteLeave: (to, from, next) => {
        console.log('准备离开路由模板。')
        console.log(to)
        confirm.log(from)
        next()
      }
    },
    {
      path: '/somepath',
      redirect: '/'
    },
    {
      path: '*',
      component: Error
    },
    {
      path: '/count',
      component: Count
    }
  ]
})
