import fs from 'fs'
import path from 'path'
import { RequestBody, RouterQuery } from '@/controllers/user'
import { sleep } from '@/utils'


const attachmentImage = fs.readFileSync(
  path.resolve(
    process.cwd(),
    'public/google-logo.png'
  )
)

/**
 * @example
 */

export default class UserService {
  getUserinfo = async (params: RouterQuery): Promise<unknown> => {

    const {
      userId
    } = params


    await sleep(1000)

    return {
      userId,
      username: 'Wisdom',
      email: 'pdsu.wwz@foxmail.com',
      timestamp: new Date()
    }
  }

  generateImage = async (params: RequestBody): Promise<Buffer> => {
    const {
      url
    } = params

    // TODO: Mock image

    await sleep(3000)

    return attachmentImage
  }
}
