class Cntrl{
    static async hello (ctx) {
      try {
        ctx.body = {message: "Hello World!"}
      } catch (e) {
        throw new Error(e);
      }
    }
}
module.exports = Cntrl;