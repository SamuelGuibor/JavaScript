const validarData = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(validarData.test('05/02/2024'));
console.log(validarData.test('222/02/2024'));
console.log(validarData.test('05/02/24'));
console.log(validarData.test('2/2/2024'));