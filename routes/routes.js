class Routes {
  constructor(app){
    this.app = app

    this.setRoutes()
  }

  setRoutes(){
    this.app.get('/', this.index)
    this.app.get('/save', this.save)
  }

  index(req, res){
    res.send('hello there!')
  }
  save(req, res){
    res.send('save me!')
  }
}

module.exports = Routes
