function somaComDelay(a,b) {
    return new Promise(resolve => {
        setTimeout(function () { 
            resolve(a + b);
         }, 4000);
    })
}

async function resolucao(a,b,c) {
    
    let x = somaComDelay(a, b);

    let y = c;

    return await x + y;
}

resolucao(1,2,3).then(value => console.log(value));