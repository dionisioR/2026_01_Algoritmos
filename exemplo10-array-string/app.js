let div = document.getElementById("resultado")

let nomes = ["João@hotmail.com", "Maria@gmail.com", "Pedro@gmail.com.br", "Ana@outlook.com"]

console.log(nomes[0]) // João@hotmail.com
console.log(nomes[1]) // Maria@gmail.com
console.log(nomes[2]) // Pedro@gmail.com.br
console.log(nomes[3]) // Ana@outlook.com

for (let i = 0; i < nomes.length; i++) {
    div.innerHTML += `<p>${nomes[i].toUpperCase()}</p>`
}
div.innerHTML += `<hr>`

for (let i = 0; i < nomes.length; i++) {
   //`<p>${nomes.substring(0, nomes.indexOf("@"))}</p>`
    div.innerHTML += `<p>${nomes[i].substring(0, nomes[i].indexOf("@"))}</p>`
}

div.innerHTML += `<hr>`

for (let i = 0; i < nomes.length; i++) {
   //`<p>${nomes.substring(0, nomes.indexOf("@"))}</p>`
    div.innerHTML += `<p>${nomes[i].substring(nomes[i].indexOf("@") + 1)}</p>`
}