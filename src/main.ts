import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import Cors from '@koa/cors'

import { PORT } from '@/config'
import routes from '@/routes'
import { getLocalAddress } from '@/utils'


const app = new Koa()

const ROUTER_PREFIX = '/api'
const router = new Router({
  prefix: ROUTER_PREFIX
})


// Routes Mapping
routes.forEach((route) => {
  const params = [
    route.path,
    route.action
  ]
  router[route.method](...params)
})


app.use(Cors())
app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(PORT, () => {
  console.clear()

  const address = getLocalAddress()
  const localhost = address[Object.keys(address)[0]]?.[0]

  const blank1 = ''.padStart(1)
  const blank2 = ''.padStart(2)

  console.log(
    '\n',
    blank1,
    '🚀🚀🚀',
    '\x1b[32m',
    'Koa dev server running at:\n',
    '\x1b[0m'
  )
  console.log(
    blank2,
    `> Local:  `,
    '\x1b[36m',
    `http://localhost:${PORT}${ROUTER_PREFIX}`,
    '\x1b[0m'
  )
  console.log(
    blank2,
    `> Network:`,
    '\x1b[36m',
    `http://${localhost}:${PORT}${ROUTER_PREFIX}\n`,
    '\x1b[0m'
  )
})
