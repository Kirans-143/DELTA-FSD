let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      h1.style.color = color;
      res("Color Changed");
    }, delay);
  });
}

changeColor("red", 1000)
  .then(() => {
    console.log("red color was completed");
    return changeColor("green", 2000);
  })
  .then(() => {
    console.log("green color was completed");
    return changeColor("blue", 2000);
  })
  .then(() => {
    console.log("blue color was completed");
    return changeColor("yellow", 2000);
  })
  .then(() => {
    console.log("yellow color was completed");
    return changeColor("purple", 2000);
  })
  .then(() => {
    console.log("purple color was done");
  })
  .catch(() => {
    console.log("error in request");
  });
// changeColor("red", 1000, () => {
//   changeColor("green", 1000, () => {
//     changeColor("blue", 1000, () => {
//       changeColor("yellow", 1000, () => {
//         changeColor("purple", 1000);
//       });
//     });
//   });
// });
