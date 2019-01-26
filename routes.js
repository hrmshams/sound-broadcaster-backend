class Routes {
  constructor(app){
    this.app = app
    this.setRoutes()
  }

  setRoutes(){
    this.app.get('/', this.index)
  }

  index(req, res){
    console.log('/');
    res.send('hello there!')
  }
}

module.exports = Routes
