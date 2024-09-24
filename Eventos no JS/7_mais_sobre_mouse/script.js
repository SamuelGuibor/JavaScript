let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

btn1.addEventListener("mousedown", function () { 
    console.log("Apertou o Botao");
});

btn1.addEventListener("mouseup", function () { 
    console.log("Soltou o Botao");
});

btn2.addEventListener("dblclick", function () { 
    console.log("Double CLick");
}); 

btn2.addEventListener("contextmenu", function (e) { 
    e.preventDefault();
    console.log("Botao Direito");
});