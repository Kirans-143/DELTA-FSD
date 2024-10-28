function multipleGreet(func, count) {
  for (let i = 1; i <= count; i++) {
    func();
  }
}

let greet = function () {
  console.log("hello world");
};
multipleGreet(greet, 10);
