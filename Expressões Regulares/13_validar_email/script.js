const validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("matheus@gmail.com"));
console.log(validarEmail.test("matheus@gmail"));
console.log(validarEmail.test("gmail.com"));