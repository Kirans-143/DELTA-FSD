function savetoDB(data, success, failure) {
  let internetSpeed = Math.floor(Math.random() * 10 + 1);
  if (internetSpeed > 4) {
    success();
  } else {
    failure();
  }
}

savetoDB(
  "apna College",
  () => {
    console.log("success : saved your data");
    savetoDB(
      "hello Folks",
      () => {
        console.log("Success2: Data2 is saved");
        savetoDB(
          "3rd time",
          () => {
            console.log("Success: Final data saved");
          },
          () => {
            console.log("Failure: Finally Data not saved");
          }
        );
      },
      () => {
        console.log("Failure: Data2 not saved");
      }
    );
  },
  () => {
    console.log("Failure: weak connection! Data not saved");
  }
);
