function Cachorro (raca, pata, cor) {
    this.raca = raca;
    this.pata = pata;
    this.cor = cor;
}

Cachorro.prototype.uivar = function () { 
    console.log("Auuuu ");
}

Cachorro.prototype.latir = function () { 
    console.log("Au au ");
}

let husky = new Cachorro ('Husky', 4, 'Cinza');

husky.latir();


husky.uivar();