function hideChat() {
  const chatFooter = document.getElementById('card-footer');
  const chatBody = document.getElementById('card-body');

  chatBody.className = chatBody.className + ' d-none';
  chatFooter.className = chatFooter.className + ' d-none';

  const btn = document.getElementById('btn-chat');
  btn.setAttribute('onclick', 'showChat()');
  document.getElementById("card-header").style.backgroundColor = "red";
}

function showChat() {
  const chatFooter = document.getElementById('card-footer');
  const chatBody = document.getElementById('card-body');

  chatBody.className = 'card-body';
  chatFooter.className = 'card-footer';

  const btn = document.getElementById('btn-chat');
  btn.setAttribute('onclick', 'hideChat()');

  document.getElementById("card-header").style.backgroundColor = "#428bca";
}

alert("I am an alert box!");