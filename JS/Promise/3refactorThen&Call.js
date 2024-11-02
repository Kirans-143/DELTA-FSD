// function savetoDB(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10 + 1);
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// savetoDB(
//   "apna College",
//   () => {
//     console.log("success : saved your data");
//     savetoDB(
//       "hello Folks",
//       () => {
//         console.log("Success2: Data2 is saved");
//         savetoDB(
//           "3rd time",
//           () => {
//             console.log("Success: Final data saved");
//           },
//           () => {
//             console.log("Failure: Finally Data not saved");
//           }
//         );
//       },
//       () => {
//         console.log("Failure: Data2 not saved");
//       }
//     );
//   },
//   () => {
//     console.log("Failure: weak connection! Data not saved");
//   }
// );

// REFACTORING ABOVE CODE PRoMiSES
// function savetoDB(data) {
//     return new Promise((resolve, reject) => {
//       let internetSpeed = Math.floor(Math.random() * 10 + 1);
//       if (internetSpeed > 4) {
//         resolve("success : data was saved");
//       } else {
//         reject("failure: weak connection");
//       }
//     });
//   }

//Refactoring above code Then Call
function savetoDB(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10 + 1);
    if (internetSpeed > 4) {
      resolve("success : data was saved");
    } else {
      reject("failure: weak connection");
    }
  });
}

savetoDB("Apna College")
  .then(() => {
    console.log("Promise was resolved");
  })
  .catch(() => {
    console.log("Promise was rejected");
  });
