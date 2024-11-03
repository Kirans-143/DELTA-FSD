/* Just AS Example that How we use async and await function
function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      console.log(num);
      resolve();
    }, 1000);
  });
}

async function demo() {
  await getNum();
  await getNum();
  await getNum();
  await getNum();
  getNum();
}
*/

/*Now lets try the Await and Async in our color change program */

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      h1.style.color = color;
      console.log(`Color changed to ${color}`);
      res("Color Changed");
    }, delay);
  });
}

async function demo() {
  try {
    await changeColor("red", 1000);
    await changeColor("green", 2000);
    await changeColor("blue", 2000);
    await changeColor("yellow", 2000);
    changeColor("purple", 2000);
  } catch (err) {
    console.log("error caught");
  }
}
demo();

// changeColor("red", 1000)
//   .then(() => {
//     console.log("red color was completed");
//     return changeColor("green", 2000);
//   })
//   .then(() => {
//     console.log("green color was completed");
//     return changeColor("blue", 2000);
//   })
//   .then(() => {
//     console.log("blue color was completed");
//     return changeColor("yellow", 2000);
//   })
//   .then(() => {
//     console.log("yellow color was completed");
//     return changeColor("purple", 2000);
//   })
//   .then(() => {
//     console.log("purple color was done");
//   })
//   .catch(() => {
//     console.log("error in request");
//   });
