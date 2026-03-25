let valor = 5

let resultado = document.getElementById("resultado")


resultado.innerHTML = `O valor digitado foi ${valor}<br>`

// let pot = valor ** 2
let pot = Math.pow(valor, 2)

resultado.innerHTML += `O valor elevado ao quadrado é ${pot}<br>`

valor = 4
let raizQ = Math.sqrt(valor)
resultado.innerHTML += `A raiz quadrada de ${valor} é ${raizQ}<br>`

valor = 27
let raizC = Math.cbrt(valor)
resultado.innerHTML += `A raiz cúbica de ${valor} é ${raizC}<br>`


valor = 123
let raizSet = Math.pow(valor, 1/7)
resultado.innerHTML += `A raiz sétima de ${valor} é ${raizSet}<br>`

let PI = Math.PI
resultado.innerHTML += `O valor de PI é ${PI}<br>`
console.log(PI);
console.log(PI.toFixed(2));
console.log(PI.toFixed(3));
console.log(PI.toFixed(4));

// Math.PI * raio ** 2
// Math.PI * raio * raio
// Math.PI * Math.pow(raio, 2)

valor = 5.123
let valorCima = Math.ceil(valor)
resultado.innerHTML += `O valor arredondado para cima de ${valor} é ${valorCima}<br>`

valor = 5.993
let valorBaixo = Math.floor(valor)
resultado.innerHTML += `O valor arredondado para baixo de ${valor} é ${valorBaixo}<br>`

valor = 5.4
let valorArred = Math.round(valor)
resultado.innerHTML += `O valor arredondado de ${valor} é ${valorArred}<br>`

let maior = Math.max(5, 10, 3, 8, -5, 14, -22)
resultado.innerHTML += `O maior valor é ${maior}<br>`

let menor = Math.min(5, 10, 3, 8, -5, 14, -22)
resultado.innerHTML += `O menor valor é ${menor}<br>`

let aleatorio = Math.random()
resultado.innerHTML += Math.floor(aleatorio * 1000)

let x = [1,25]