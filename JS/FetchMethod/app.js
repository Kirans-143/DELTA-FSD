let url = "https://catfact.ninja/fact";

// fetch(url)
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function getFacts() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
  console.log("bye");
}
