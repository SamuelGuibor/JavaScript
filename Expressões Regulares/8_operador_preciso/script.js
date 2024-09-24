const cep = /\d{5} - \d{3}/;

console.log(cep.test("882221-203"));
console.log(cep.test("asd"));