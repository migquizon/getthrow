function displayName(name) {
  console.log(name);
}

function callFunc(paramFunc) {
  console.log("callFunc was called");
  paramFunc("Mariah");
  console.log("callFunc after the paramFunc");
}

callFunc(displayName);
console.log(typeof displayName); // function

function sumCallback(a, b, cb) {
  let sum = a + b;
  cb(sum);
}

function handleSum(sum) {
  console.log(sum);
}

sumCallback(1, 2, handleSum);