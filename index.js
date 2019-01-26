var express = require('express')
var app = express()

var middlewares = new(require('./middlewares/index'))(app)
var routes = new (require('./routes/routes'))(app)
var configure = new(require('./configure'))()

app.listen(configure.port, configure.print)
