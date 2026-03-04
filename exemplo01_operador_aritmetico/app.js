// let numero_01 = parseFloat(prompt("Digite o primeiro número: "))
// let numero_02 = parseFloat(prompt("Digite o segundo número: "))

// console.log(typeof numero_01);
// console.log(typeof numero_02);

// document.getElementById("resultado").innerHTML =  numero_01 + numero_02;


let numero_01 = prompt("Digite o primeiro número: ")
let numero_02 = prompt("Digite o segundo número: ")

console.log(typeof numero_01);
console.log(typeof numero_02);

document.getElementById("resultado").innerHTML =  parseFloat(numero_01) + parseFloat(numero_02);

numero_01 = parseFloat(numero_01);

console.log('--------------');
console.log(typeof numero_01);
console.log(typeof numero_02);