var socket = io.connect('http://localhost:8000');

var username = "";

function sendMessage(data) {
  if($('#message').val() != "")
  $('#chat').append(`<li class="list-group-item"><span style="font-weight: bold;">${data.user}</span>: ${data.message}</li>`);
  $('#message').val("");
}  

function setNickname(data) {
  username = data;
  $('#users').append(`<li class="list-group-item">${username}</li>`);
  $('#nick').hide();
}

$('#message').focus(function() {
  $('#message').on('keydown', function(e) {
    if(e.which == '13') {
      sendMessage({user: username, message: $('#message').val()});
      e.stopImmediatePropagation();
    }
  });
});
$('#username').focus(function() {
  $('#username').on('keydown', function(e) {
    if(e.which == '13') {
      setNickname($('#username').val());
      $('#message').focus();
      e.stopImmediatePropagation();
    }
  });
});
//$('#chat').append(`<li class="list-group-item"><span style="font-weight: bold;">${data.user}</span>: ${data.message}</li>`);
