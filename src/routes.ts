import Koa from 'koa'

import HomeController from '@/controllers/home'
import UserController from '@/controllers/user'

interface RouteConfig {
  path: string
  method: string | 'get' | 'post' | 'delete' | 'put'
  action: (ctx: Koa.Context) => any
}

const routes: Array<RouteConfig> = [
  {
    path: '/',
    method: 'get',
    action: HomeController.hello
  },
  {
    path: '/get_userinfo',
    method: 'get',
    action: UserController.mainHandler
  },
  {
    path: '/gen_image',
    method: 'post',
    action: UserController.generateImage
  }
]
export default routes
