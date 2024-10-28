let num = [2, 4, 5, 6, 8, 7, 9, 10];
console.log(num[2]);

// Splice Method
let arr = ["red", "green", "blue", "yellow", "white", "pink"];

arr.splice(4);
console.log(arr);
console.log("................................................................");

arr.splice(0, 1);
console.log(arr);
console.log("................................................................");

arr.splice(0, 1, "black", "brown");
console.log(arr);
console.log("................................................................");

let arr1 = ["june", "april", "march", "july"];
arr1.splice(0, 2, "nov", "dec");
console.log(arr1);

// let n = prompt("enter your number");
// n = parseInt(n);
// for (let i = n; i <= n * 10; i = i + n) {
//   console.log(i);
// }

console.log("................................................................");

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i, j);
  }
}

console.log("................................................................");

let i = 1;
while (i <= 8) {
  console.log(i);
  i++;
}

let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
}
