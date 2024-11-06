let jsonData = {
  fact: "Unlike dogs, cats do not have a sweet tooth. Scientists believe this is due to a mutation in a key taste receptor.",
  length: 114,
};

let validResp = JSON.parse(jsonData);
console.log(validResp.fact);

let javaObj = {
  name: "visha",
  age: 36,
};
console.log(JSON.stringify(javaObj));
