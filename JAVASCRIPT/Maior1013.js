var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [a, b, c] = lines.shift().split(" ").map(item => parseInt(item))

var maiorAB = (a + b + Math.abs(a - b)) / 2
var maiorXC = (c + maiorAB + Math.abs(c - maiorAB)) / 2

console.log(maiorXC + " eh o maior")