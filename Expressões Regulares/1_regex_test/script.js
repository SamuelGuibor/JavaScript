const reg1 = new RegExp('Bola');

console.log(reg1.test("tem Bola?"));
console.log(reg1.test("não tem"));

const reg2 = /bola/;
let texto = 'Tem bola na cesta';

console.log(reg2.test("tem Bola?"));
console.log(reg2.test("não tem"));
console.log(reg2.test(texto));

console.log(/quadrado/.test("Aonde está o quadrado"));
console.log(/quadrado/.test("12862427quadrado12379128731831"));