const Pessoa = {
    maos: 2,
}

//console.log(Object.getPrototypeOf(pessoa));
//console.log(Object.getPrototypeOf(pessoa) === Object.prototype); 

//console.log(pessoa.hasOwnProperty('Maos'));

const pessoaNova = Object.create(pessoa);

console.log(pessoaNova.maos);

console.log(pessoaNova.hasOwnProperty('Maos'));

console.log(Object.getPrototypeOf(pessoaNova) === Pessoa);
