function publishMessage(){
  var message = document.getElementById("messageText").value;
  client.publish('/foo', {text: message});
}

window.addEventListener('load', function(){
  document.getElementById("messageButton").addEventListener('click', publishMessage);
});