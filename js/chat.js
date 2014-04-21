var chatName = prompt("Name");

function publishMessage(){
  var message = document.getElementById("messageText").value;
  client.publish('/chat', {text: message, name: chatName});
  document.getElementById("messageText").value = '';
}

window.addEventListener('load', function(){
  document.getElementById("messageButton").addEventListener('click', publishMessage);
});

var subscription = client.subscribe('/chat', function(message) {
  var elemDiv = document.createElement('div');
  elemDiv.innerHTML = message.name +": " + message.text;
  document.body.appendChild(elemDiv);
});