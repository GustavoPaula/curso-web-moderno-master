console.log(this === global); // false
console.log(this === module); // false

console.log(this === exports); // true
console.log(this === module.exports); // true

function logThis() {
  console.log(this === exports); // false
  console.log(this === module.exports); // false

  console.log(this === global); // true
}

logThis();
