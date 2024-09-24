const notab = /[^ab]/;

console.log(notab.test("a"));
console.log(notab.test("Aqui tem A"));

const nottoaz = /[^a-z]/;

console.log(nottoaz.test("a"));
