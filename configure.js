class Configure {
  constructor(){
    this.port = 3300
    this.print = this.print.bind(this)
  }

  print(){
    console.log('the server is running on port ' + this.port);
  }

}

module.exports = Configure
