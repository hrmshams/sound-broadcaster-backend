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

      socket.on('chat_message', function(msg){
        console.log('a message recieved: ' + msg);
      });

    });
  }
}

module.exports = ConfigureIO
