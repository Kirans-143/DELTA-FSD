let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let p = document.querySelector("p");

function colorChange() {
  console.dir(this.innerText);
  this.style.backgroundColor = "blue";
}

btn.addEventListener("click", colorChange);

h1.addEventListener("click", colorChange);

h2.addEventListener("click", colorChange);

p.addEventListener("click", colorChange);
