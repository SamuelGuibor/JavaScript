let arr = [1,2,3,4,5];

let arr2 = [];

function interarArr (arr) {
    if(arr.length == 0){
        throw new Error ("O array precisa ter pelo menos um elemento");
    } else {
        for (let i = 1; i < arr.length; i++){
            console.log(i);
        }
    }
}

interarArr(arr);
interarArr(arr2);