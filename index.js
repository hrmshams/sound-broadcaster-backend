var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

var cors = require('cors')
var middlewares = new(require('./middlewares/index'))(app)
app.use(cors({credentials: true, origin: true}))

var routes = new (require('./routes/routes'))(app)
var configure = new(require('./configure'))()
var configured_io = new(require('./socket/index'))(io)

http.listen(configure.port, configure.print)
