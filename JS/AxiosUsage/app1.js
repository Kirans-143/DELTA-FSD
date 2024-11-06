let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  console.log("Button was clicked");
  let country = document.querySelector("input").value;
  console.log(country);
  let college = await getCollege(country);
  console.log(college);
  show(college);
});

function show(college) {
  let list = document.querySelector("#list");
  list.innerText = "";
  for (col of college) {
    console.log(col.name);

    //Creating List Item
    let li = document.createElement("li");
    li.innerText = col.name;
    list.appendChild(li);
  }
}

async function getCollege(country) {
  try {
    let res = await axios.get(url + country);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}
