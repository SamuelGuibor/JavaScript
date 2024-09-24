const p1 = new Promise(function (resolve, reject) { 
    setTimeout(function () { 
        resolve(15);
     }, 5000);
});

const p2 = new Promise.resolve(10);

const p3 = new Promise.resolve((resolve, reject) => {
    resolve(12);
});

Promise.all([p1,p2,p3]).then((values) => console.log(values));
