// let btn = document.querySelector("button");
// console.dir(btn);

// // btn.onclick = function () {
// //   alert("Hello World");
// // };

// function sayHello() {
//   alert("Button was clicked");
// }

// btn.onclick = sayHello;

let btns = document.querySelectorAll("button");
for (btn of btns) {
  btn.onclick = sayHello;
  btn.onmouseenter = function () {
    console.log("Button entered");
  };
}

function sayHello() {
  alert("Button was clicked");
}
