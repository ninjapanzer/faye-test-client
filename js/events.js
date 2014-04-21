function publishMessage(){
  var message = document.getElementById("messageText").value;
  client.publish('/foo', {text: message});
}
function startup(){
  document.getElementById("messageButton").addEventListener('click', publishMessage);
}

startup();