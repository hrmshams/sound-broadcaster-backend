class ConfigureIO{
  constructor(io){
      this.configure(io)
  }

  configure(io){
    io.on('connection', function(socket){
      console.log('a user connected');

      socket.on('disconnect', function(){
        console.log('user disconnected');
      });

      socket.on('msg_from_client', function(msg){
        console.log('a message recieved: ' + msg);
        socket.broadcast.emit('msg_from_server', msg);
      });

    });
  }
}

module.exports = ConfigureIO
