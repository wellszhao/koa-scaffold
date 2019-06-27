const router = require('koa-router')()

router.get("/", async function (ctx) {
    ctx.body = {message: "Hello World!"}
});

module.exports = router