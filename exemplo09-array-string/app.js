// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let nome = "Ana Maria"
   
// console.log(num)
// console.log(nome)

// console.log(num[0])
// console.log(nome[0])


// // STRING
// console.log(nome.length)
// console.log(nome[0])
// console.log(nome[1])
// console.log(nome[2])
// console.log(nome[3])

// console.log("------------------")
// let letra = ''
// for (let i = 0; i < nome.length; i++) {
//     letra += nome[i] + '-'
// }
// console.log(letra)

// console.log("------------------")
// console.log("------------------")
// console.log("------------------")

// let div = document.getElementById('resultado')

// let texto = 'Este é um Exemplo de String.  '
// div.innerHTML = `<p>${texto}</p>`
// div.innerHTML += `<p>${texto.toUpperCase()}</p>`
// div.innerHTML += `<p>${texto.toLowerCase()}</p>`
// div.innerHTML += `<p>${texto.length}</p>`
// div.innerHTML += `<p>${texto.trim().length}</p>`
// div.innerHTML += `<p>${texto.substring(5, 10)}</p>`
// div.innerHTML += `<p>${texto.substring(5)}</p>`

// texto = "fatec@gmail.com"
// // indexof() - retorna a posição da primeira ocorrência'
// console.log(texto.indexOf('@'))
// console.log(texto.indexOf('gmail'))
// console.log(texto.indexOf('a'))
// console.log(texto.indexOf('www'))

// let nome2 = texto.substring(0, texto.indexOf('@'))
// div.innerHTML += `<p>${nome2}</p>`


// let email_1 = "fatec.guaratingueta@gmail.com"
// let email_2 = "fatec.guaratingueta@gmail.com.br"
// let email_3 = "fatec.guaratingueta@outlook.com"
// let email_4 = "fatec@gmail.com"
// let email_5 = "fatec@gmail.com.br"
// let email_6 = "fatec@outlook.com"

// let indice_arroba_1 = email_1.indexOf('@')
// console.log(indice_arroba_1)
// console.log(email_1[indice_arroba_1+1])

// console.log("-------------------")
// div.innerHTML += `<p>${email_1.substring(email_1.indexOf('@')+1)}</p>`
// div.innerHTML += `<p>${email_2.substring(email_2.indexOf('@')+1)}</p>`
// div.innerHTML += `<p>${email_3.substring(email_3.indexOf('@')+1)}</p>`
// div.innerHTML += `<p>${email_4.substring(email_4.indexOf('@')+1)}</p>`
// div.innerHTML += `<p>${email_5.substring(email_5.indexOf('@')+1)}</p>`
// div.innerHTML += `<p>${email_6.substring(email_6.indexOf('@')+1)}</p>`


let x = "julia@gmail.com"
console.log(x)
console.log(x.indexOf('@')+1)

let indice = x.indexOf('@')
console.log(x[indice+1])

console.log(x.substring(indice+1))