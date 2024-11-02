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
  .then((res) => {
    console.log("Promise was resolved.Data1 saved :", res);
    return savetoDB("Hello world");
  })
  .then((res) => {
    console.log("data2 saved");
    return savetoDB("Demo version :", res);
  })
  .then((res) => {
    console.log("Data3 save : ", res);
  })
  .catch((err) => {
    console.log("Promise was rejected : ", err);
  });
