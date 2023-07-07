const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    const upperAlp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    console.log([...str].map(v=>upperAlp.includes(v) ? v.toLowerCase() : v.toUpperCase()).join(''))
});