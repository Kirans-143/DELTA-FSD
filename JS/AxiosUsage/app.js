let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";

btn1.addEventListener("click", async () => {
  //console.log("button was clicked");
  let fact = await getFacts();
  console.log(fact);
  let p = document.querySelector("#result");
  p.innerText = fact;
});

async function getFacts() {
  try {
    let res = await axios.get(url);
    return res.data.fact;
  } catch (e) {
    return "No fact found";
  }
}

btn2.addEventListener("click", async () => {
  //console.log("button was clicked");
  let image = await getImage();
  console.log(image);
  let img = document.querySelector("#result1");
  img.setAttribute("src", image);
});

async function getImage() {
  try {
    let res = await axios.get(url2);
    return res.data.message;
  } catch (e) {
    return "No Image found";
  }
}
