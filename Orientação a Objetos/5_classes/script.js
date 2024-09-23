let Cachorro = {
    patas: 4,
    raca: 'SRD',
    latir: function () { 
        console.log("Au au")
    }
}

let labrador = Object.create(Cachorro);

labrador.latir();

labrador.raca = "Labrador";

console.log(labrador.raca);
console.log(cachorro.raca);

let Pastor = Object.create(Cachorro);

pastor.raca = "Pastor Alemão";

console.log(pastor.raca);