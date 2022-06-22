new Promise(executor)
const myPromise = new Promise(function(resolve, reject){
    console.log("Выполнение асинхронной операции");
});

//

const myPromise = new Promise(function(resolve, reject){
    console.log("Выполнение асинхронной операции");
     
    return "Привет мир!";
});

//

const myPromise = new Promise(function(resolve, reject){
    console.log("Выполнение асинхронной операции");
    reject("Переданы некорректные данные");
});

//

const x = 4;
const y = 0;
const myPromise = new Promise(function(resolve, reject){
 
    if(y === 0) {
        reject("Переданы некорректные данные");
    }
    else{
        const z = x / y;
        resolve(z);
    }
});