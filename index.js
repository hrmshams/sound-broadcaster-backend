var express = require('express')
var app = express()

var routes = new (require('./routes'))(app)
var configure = new(require('./configure'))()

app.listen(configure.port, configure.print)
