// let str = ''
// for(let i = 1; i <= 10; i++) {

//     if(i % 2 == 0) {
//         // Par
//         str += "<h3 class='text-success'>Exemplo de estrutura de repetição com o FOR.</h3>"
//     } else {
//         // Ímpar
//         str += "<h3 class='text-danger'>Exemplo de estrutura de repetição com o FOR.</h3>"
//     }
    
// }

// document.getElementById('resultado').innerHTML = str

let str = ''
for(let i = 1; i <= 10; i++) {

    if(i % 2 == 0) {
        // Par
        str += "<h3 style='color: green;'>Exemplo de estrutura de repetição com o FOR.</h3>"
    } else {
        // Ímpar
        str += "<h3 style='color: red;'>Exemplo de estrutura de repetição com o FOR.</h3>"
    }
    
}

document.getElementById('resultado').innerHTML = str

