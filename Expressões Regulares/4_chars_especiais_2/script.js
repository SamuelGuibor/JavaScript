const dia = /\d\d/;

console.log(dia.test("2019"));
console.log(dia.test("asd"));
console.log(dia.test("05"));

const palavras3Letras = /\w\w\w/;

console.log(palavras3Letras.test("Dia"));
console.log(palavras3Letras.test("Noite"));
console.log(palavras3Letras.test("Olá"));
console.log(palavras3Letras.test("Oi"));