let palavras = [ "sol", "lua", "estrela", "nuvem", "chuva", "vento", "neve", "raio", "arco", "tempestade"];

let div = document.getElementById("resultado");

let qtd = 0
for (let i = 0; i < palavras.length; i++) {
    if(palavras[i].length % 2 == 0){
        div.innerHTML += `${palavras[i]} <br>`;
        qtd++;
    }
}
div.innerHTML += `<h3>Quantidade de palavras com número par de caracteres: ${qtd}</h3> <hr>`;   

let x = ["ramON"];
console.log(x)
console.log(x[0][0].toUpperCase()+ x[0].substring(1).toLowerCase())




