let id = setInterval(() => {
  console.log("hello world");
}, 2000);

setTimeout(() => {
  clearInterval(id);
  console.log("clear interval ran successfully");
}, 11000);
