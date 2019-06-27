const Koa = require('koa')
const app = new Koa()

const onerror = require('koa-onerror')
const logger = require('koa-logger')
const bodyparser = require('koa-bodyparser')
const json = require('koa-json')
const cors = require('koa2-cors')

const routes = require('./routes')

onerror(app)

app.use(logger())
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))

app.use(json())

app.use(cors({
  origin: '*',
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE', 'PUT'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

app.use(routes.routes(), routes.allowedMethods())

app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
