let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let h2 = document.querySelector("h2");
  let randomColor = getColor();
  h2.innerText = randomColor;

  let div = document.querySelector("div");
  div.style.backgroundColor = getColor();

  console.log("color updated");
});
function getColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let finalColor = `rgb(${red},${green},${blue})`;
  return finalColor;
}
