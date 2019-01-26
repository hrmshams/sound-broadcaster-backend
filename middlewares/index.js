var print = require('./print')
class Middlewares{
  constructor(app){
    this.app = app
    this.setMiddlewares()
  }

  setMiddlewares(){
    this.app.use('/', print)
  }
}

module.exports = Middlewares
