import Koa from 'koa'
import UserService from '@/services/user'

export interface RouterQuery {
  userId?: string
}

export interface RequestBody {
  url?: string
}

class UserController {
  private service = new UserService()

  mainHandler = async (ctx: Koa.Context) => {
    const {
      userId
    }: RouterQuery = ctx.query

    if (!userId){
      ctx.status = 404
      ctx.body = {
        status: 'NOT-FOUND'
      }
      return
    }

    const userinfo = await this.service.getUserinfo({
      userId
    })
    ctx.body = userinfo
  }

  // Generate a image to response
  generateImage = async (ctx: Koa.Context) => {
    const {
      url
    }: RequestBody = ctx.request.body

    if (!url){
      ctx.status = 404
      ctx.body = {
        status: 'NOT-FOUND'
      }
      return
    }

    const buffer = await this.service.generateImage({
      url
    })

    if (Object.prototype.toString.call(buffer) === '[object Uint8Array]'){
      ctx.set('content-type', 'image/png')
    }
    ctx.body = buffer
  }
}

export default new UserController()
