var x = "hello";
console.log(x);
var x = "work";
console.log(x);


//


let x = "hello";
console.log(x);
var x = "work"; // здесь будет ошибка, так как переменная x уже объявлена
console.log(x);


//


let x = 10;
{
    let x = 25;
    console.log(x); // 25
}
console.log(x); // 10


//


let x = 10;
{
    let x = 25;
    {
        let x = 163;
        console.log(x); // 163
    }
    console.log(x); // 25
}
console.log(x); // 10


//


var x = 72;
console.log(x); // 72
var x = 24;     // норм
console.log(x); // 24


//


let x = 72;
console.log(x); // 72
let x = 24;     // ! Ошибка
console.log(x);

