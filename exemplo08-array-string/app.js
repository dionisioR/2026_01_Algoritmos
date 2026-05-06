// let arr =[]  // Array vazio

// let arr = [1, 2.25, "Olá", true, [1, 2, 3], { nome: "João", idade: 30 }] // Deve se evitar misturar tipos de dados em um array

let arr = [1, 2, 3, 4, 5]
console.log(arr[0]);
document.getElementById("resultado").innerText = arr[0]

arr.push(6) // Adiciona um elemento no final do array
console.table(arr);



for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

console.log('----------------');

let str =''
for(let i = 0; i < arr.length; i++){
    str += arr[i] + ' ';

    //0 /1/2
    // str = '' + 1 + '' + 2
}
console.log(str);

console.log("----------------");


for(let i = 0; i < arr.length; i++){
    let x = 'teste'
    str += arr[i] + ' ';
}
document.getElementById("resultado").innerHTML = `<p>${str}</p>`;