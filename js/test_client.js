var client = new Faye.Client('http://murmuring-atoll-6726.herokuapp.com/faye');

var subscription = client.subscribe('/foo', function(message) {
  var elemDiv = document.createElement('div');
  elemDiv.innerHTML = message.text;
  document.body.appendChild(elemDiv);
});