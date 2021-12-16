export default class HomeService {
  healthCheck = (): Promise<unknown> => {
    return new Promise(resolve => resolve({
      say: {
        hello: '☂️ Hello, Koa Server',
        date: new Date()
      }
    }))
  }
}
