var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a*(b%10));
console.log(a*(Math.floor((b%100)/10)));
console.log(a*(Math.floor(b/100)));
console.log(a*b);