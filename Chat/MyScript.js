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

// alert("I am an alert box!");
hideChat()
function sum() {
  const a = document.getElementById('leta').value;
  const b = document.getElementById('letb').value;
  //alert(result);

  let result = Number(a) + Number(b);
  if (result >= 100) {
    alert('100+');
  }
  else if (result >= 70) {
    alert('70+');
  }
  else if (result >= 50) {
    alert('50+');
  }
  else if (result >= 10) {
    alert('10+');
  }
  else if (result >= 0) {
    alert('0+');
  }


}

function minMax() {
  const min = document.getElementById('min').value;
  const max = document.getElementById('max').value;
  const num = document.getElementById('num').value;

  let result = x
  if (max < min) {
    return undefined
  }
  if (num < min) {
    return min;
  }
  if (num > max) {
    return max;
  }

  return num;

}


