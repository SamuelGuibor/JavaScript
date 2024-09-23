function criaCachorro () {
    let Cachorro = Object.create({});
    Cachorro.raca = raca;
    Cachorro.patas = patas;
    Cachorro.cor = cor;

    Cachorro.latir = function () { 
        console.log("Au au")
    }
    
    return Cachorro;
}

let Doberman = criaCachorro ('Doberman', 4, 'Preto');

console.log(Doberman);

Doberman.latir;

