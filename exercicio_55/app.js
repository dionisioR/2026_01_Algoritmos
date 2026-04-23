// let num_01 = parseFloat(prompt("Digite o primeiro número:"))
// let num_02 = parseFloat(prompt("Digite o segundo número:"))
// let maior_numero = 0

// if (num_01 > num_02) {
//     maior_numero = num_01
// }else{
//     maior_numero = num_02
// }
// document.getElementById("resultado").innerHTML = `Os números digitados foram: ${num_01} e ${num_02}. <br/>O maior número é: <strong class="text-primary"> ${maior_numero} </strong>`    

//---------------------------------------
// let num_01 = parseFloat(prompt("Digite o primeiro número:"))
// let num_02 = parseFloat(prompt("Digite o segundo número:"))

// if (num_01 > num_02) {
//     document.getElementById("resultado").innerHTML = `Os números digitados foram: ${num_01} e ${num_02}. <br/>O maior número é: <strong class="text-primary"> ${num_01} </strong>`
// }else{
//    document.getElementById("resultado").innerHTML = `Os números digitados foram: ${num_01} e ${num_02}. <br/>O maior número é: <strong class="text-primary"> ${num_02} </strong>`
// }
    
//---------------------------------------
let num_01 = parseFloat(prompt("Digite o primeiro número:"))
let num_02 = parseFloat(prompt("Digite o segundo número:"))
let maior_numero = 0

if (num_01 > num_02) {
    maior_numero = num_01
}else{
    maior_numero = num_02
}
document.getElementById("resultado").innerHTML = `Os números digitados foram: ${num_01} e ${num_02}. <br/>O maior número é: <strong style="color:rgba(9, 23, 102, 0.988)"> ${maior_numero} </strong>`  