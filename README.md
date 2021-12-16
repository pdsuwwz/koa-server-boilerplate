# koa-server-boilerplate
☂️ A boilerplate for Koa Server with Typescript, Babel, and Rollup


## Prerequisites

Please make sure that [Node.js](https://nodejs.org/) (>= 10.18.1) is installed on your operating system.

## Feature

- Separation Services logic and Controllers.

- The Friendly practice for Koa project.

- Configured routing.

- Eslint configuration.

- Fast build with Rollup.

- HMR.

## Project structure

```
├── src
│   ├── controllers  ---  Server controllers
│   ├── services     ---  Server services
│   ├── config.ts    ---  About Environments variable
│   ├── main.ts      ---  Entry file
│   └── routes.ts    ---  Configs for routing controllers
```

## Installation

```bash
pnpm install
```

## Running Development

```bash
pnpm dev
```

## Running Production

The project has built-in a `pm2`, running the `pnpm start` will automatically manage the process by `pm2`.

```bash
pnpm start
```

## Simple API

* `GET /`

Health check.

```bash
curl --location --request GET \
'http://localhost:5000/'
```

* `GET /get_userinfo`

Get User Info.

```bash
curl --location --request GET \
'http://localhost:5000/get_userinfo?userId=1234567'
```

* `POST /gen_image`

Generate a image to response.

```bash
curl --location --request POST 'http://localhost:5000/gen_image' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'url=http://www.google.com' --output test-image.png
```


## Routing

In order to make the routing information more readable and transparent, the form of configuration is adopted here.

You can create an `array` and then write the routing meta information into the `array`, and reuse it in the `src/routes.ts`

```ts
const routes: Array<RouteConfig> = [
  {
    path: '/',
    method: 'get',
    action: HomeController.hello
  },
  // here...
]
```

# License

[MIT](LICENSE)
