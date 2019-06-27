const router = require('koa-router')()
const Cntrl = require('./cntrl/cntrl')

router.get("/", Cntrl.hello);

module.exports = router