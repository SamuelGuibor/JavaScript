function checarNumero(num) {
    let number = Number(number);
    if (Number.isNaN(number)){
        alert("Por favor, passe só os numeros para o programa");
    } else {
        return number;
    }
}

checarNumero(5);
checarNumero('ajhsa');

let number = prompt("Digite um numero:");

checarNumero(number);