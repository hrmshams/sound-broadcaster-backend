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

      socket.on('voice_from_client', function(chunk){
        console.log('a chunk recieved')
        socket.broadcast.emit('voice_from_server', chunk)
      })

    });
  }
}

module.exports = ConfigureIO
