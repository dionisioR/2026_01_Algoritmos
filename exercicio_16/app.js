let num_01 = parseFloat(prompt("Digite um número"))
let num_02 = parseFloat(prompt("Digite outro número"))

let soma = num_01 + num_02
let sub = num_01 - num_02

console.log(num_01, num_02, soma, sub)


// document.getElementById('resultado').innerHTML = "Os números digitados foram " + num_01 + " e " + num_02 + ".<br>" + "A soma dos números " + num_01 + " e " + num_02 + " é " + soma + ".<br>" + "A subtração dos números " + num_01 + " e " + num_02 + " é " + sub +"."

document.getElementById('resultado').innerHTML = ` 
Os números digitados foram ${num_01}  e ${num_02}.<br>
A soma dos números ${num_01} e ${num_02} é ${soma}.<br>
A subtração dos números ${num_01} e ${num_02} é ${sub}.`