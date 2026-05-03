
let nomes = ["João", "Maria", "Pedro", "Ana"]
console.log(nomes[0]);
console.log(nomes[1]);
console.log(nomes[2]);
console.log(nomes[3]);

console.log("---------------");

let frutas = []
frutas.push("Maçã");
console.log(frutas);

frutas.push("Banana");
console.log(frutas);

frutas.push("Laranja");
console.log(frutas);
console.table(frutas);

frutas.push("Uva");
console.table(frutas);

console.log(frutas.length);

console.log("-------------------------");


for (let i = 0; i < frutas.length; i++) {
   document.getElementById("resultado").innerHTML += frutas[i] + "<br>";
   console.log(frutas[i]);
}