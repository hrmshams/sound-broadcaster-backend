var print = require('./print')
// var cors = require('./cors')

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
