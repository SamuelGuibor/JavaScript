const reg = /\w+: (Matheus|João|Maria)/;

console.log(reg.test("Nome: Matheus"));
console.log(reg.test("João"));
console.log(reg.test("Nome: Maria"));
console.log(reg.test("Nome: Olá, me chamo Fernanda"));