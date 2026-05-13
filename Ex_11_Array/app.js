let palavra = prompt("Digite uma palavra: ")
let div = document.getElementById("resultado")

div.innerHTML = "<h2>Palavra: " + palavra + "</h2>"
console.log(palavra)
palavra = palavra.toLowerCase()
console.log(palavra)

let quantidade = 0
for(let i = 0; i < palavra.length; i++){
    // if(palavra[i] == "a" || palavra[i] == "e" || palavra[i] == "i" || palavra[i] == "o" || palavra[i] == "u"){
    //     quantidade++
    // }
    switch(palavra[i]){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            quantidade++
            break
    }
}
div.innerHTML += "<h3>Quantidade de vogais: " + quantidade + "</h3>"