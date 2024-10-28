let arr = [1, 2, 3, 4, 5, 6];

arr.forEach(function (item) {
  console.log(item);
});

console.log("--------------------");

let arr2 = [9, 8, 7, 6, 5, 4, 3, 2];
let print = function (el) {
  console.log(el);
};
arr2.forEach(print);
