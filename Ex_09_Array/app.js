let frases = [
    "lorem ipsum dolor ",
    "Lorem.",
    "lor cumque.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sapiente dignissimos recusandae, earum cum incidunt aliquam optio vel labore dolorem.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quos ea ad. Quibusdam, porro placeat delectus a excepturi reiciendis praesentium odio blanditiis deserunt debitis odit consequuntur modi doloremque nihil nobis, officia aspernatur.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, cumque. Doloribus, voluptate. Voluptas, cumque.",
]

for(let i = 0; i < frases.length; i++){
    if(frases[i].length > 20){
        // Imprimir
        document.getElementById("resultado").innerHTML += `<p>${frases[i]}</p>`;
    }
}