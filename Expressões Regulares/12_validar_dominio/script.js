const validaDominio = /[?www.]\w+\.com|.com.br/;

console.log(validaDominio.test("www.google.com"));
console.log(validaDominio.test("www.google.com.br"));
console.log(validaDominio.test("123.com"));
console.log(validaDominio.test("google.com"));