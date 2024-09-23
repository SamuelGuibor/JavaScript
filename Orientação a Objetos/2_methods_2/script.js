const Cachorro = {
    raca: 'SRD',
    uivar: function(){
        console.log("Auu");
    },
    rosnar: function () { 
        console.log("Grrr");
    },
    setRaca: function(raca){
        this.raca = raca;
    },
    getRaca: function(){
        return "A raça é" + this.raca;
    }
}

console.log(cahorro.raca);

Cachorro.setRaca("Pastor Alemão");

console.log(cahorro.raca);

console.log(cahorro.getRaca());