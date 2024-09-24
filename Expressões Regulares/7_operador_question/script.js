const opcional = /\'Abacax?i'/;

console.log(opcional.test("Abacaxi"));
console.log(opcional.test("Abacai"));

const opcional2 = /\d+\w?/;

console.log(opcional2.test("123"));
console.log(opcional2.test("123a"));