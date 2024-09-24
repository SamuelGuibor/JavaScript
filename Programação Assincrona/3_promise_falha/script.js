let p = Promise.resolve(new Error("Algo deu errado"));

console.log("lalalala");

p.then((value) => console.log(value))
 .catch(reason => console.log("Falhou: " + reason));