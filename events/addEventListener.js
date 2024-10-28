let btns = document.querySelectorAll("button");

for (btn of btns) {
  btn.addEventListener("click", sayHello);
  btn.addEventListener("click", byeBye);
}

function sayHello() {
  alert("Hello!");
}

function byeBye() {
  alert("I'm add event listener");
}
