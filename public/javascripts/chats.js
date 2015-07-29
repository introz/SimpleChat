var socket = io();
// socket.emit('going', "Hi! Socket.IO");
// socket.on('going', function(msg) {
//   console.log('Server: ' + msg);
//   $('#list ul').append($('<li>').text('WEQWE'));
// });

// $('form#send').submit(function(){
// 	socket.emit('going', {
// 		msg: $('#sender').val(),
//   });
// });
//
// socket.on('going', function(data) {
// 	msg = data.msg;
//   console.log(msg);
// 	$('ul#messages').append($('<li>').text(msg));
// });

$('form').submit(function(){
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
});

socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg));
});
