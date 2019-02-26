import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import CityRaiders from '@/components/cityRaiders/cityRaiders'
import Distination from '@/components/distination/distination'
import My from '@/components/my/my'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // redirect:'/distination',
       redirect:'/home'
    },
    {
      path: '/home',
      name:'home',
			component:Home,
    },
    {
      path: '/cityRaiders',
      name:'cityRaiders',
			component:CityRaiders,
    },
    {
      path: '/distination',
      name:'distination',
			component:Distination,
    },
    {
      path: '/my',
      name:'my',
			component:My,
    },
    {
			path:"**",
			component:Home
		}
    
  ]
})
