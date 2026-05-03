let i = 0;

while (i <= 9) {
    if (i % 2 == 0) {
        document.getElementById('resultado').innerHTML += `<strong class="text-success">${i} </strong>`;
    } else {
        document.getElementById('resultado').innerHTML += `<strong class="text-danger">${i} </strong>`;
    }

    i++;
}