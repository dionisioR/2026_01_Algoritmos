let palavras = ["banana", "abacaxi", "uva", "melancia", "laranja", "morango", "kiwi", "pera"];

let maior = ''
let menor = palavras[0]
for (let i = 0; i < palavras.length; i++) {
    if(palavras[i].length > maior.length){
        maior = palavras[i]
    }
}
document.getElementById("resultado").innerHTML = "A maior palavra é: " + maior;

let arr = []
for (let i = 0; i < 3; i++) {

    let x = prompt("Digite uma palavra: ")
    console.log(x)
    x = x[0].toUpperCase() + x.substring(1).toLowerCase()
    console.log(x)
    arr.push(x)

}