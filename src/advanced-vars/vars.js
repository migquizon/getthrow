console.log(a);
var a = 2;
console.log(a); 
// allows variables declared with var to be referenced and used in a function args
// throws undefined instead of an error
// vars are being hoisted

var b = 2;
var b = 4; // allows the same name to be declared
console.log(b); 

// useful when working with legacy codebases
// tricky for interviews

{
  var cupMaterial = "porcelain";
}
  
function getCupMaterial(cup) {
  console.log(cup);
}

getCupMaterial(cupMaterial);

// variables declared with var is function scoped and ignores block-level scopes {}