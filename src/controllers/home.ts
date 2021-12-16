import Koa from 'koa'
import HomeService from '@/services/home'

class HomeController {
  private service: HomeService = new HomeService()

  hello = async (ctx: Koa.Context) => {
    ctx.body = await this.service.healthCheck()
  }
}

export default new HomeController()
