class User {
  
    name: string;
    age: number;
}
 
let tom = new User();
tom.name = "Tom";
tom.age = 36;
console.log(`name: ${tom.name}  age: ${tom.age}`);  // name: Tom  age: 36

//

class User {
  
    name: string;
    age: number;
    print(){
        console.log(`name: ${this.name}  age: ${this.age}`);
    }
    toString(): string{
        return `${this.name}: ${this.age}`;
    }
}
 
let tom = new User();
tom.name = "Tom";
tom.age = 36;
tom.print();                    // name: Tom  age: 36
 
console.log(tom.toString());    // Tom: 36


//

class User {
  
    name: string;
    age: number;
    constructor(userName: string, userAge: number) {
 
        this.name = userName;
        this.age = userAge;
    }
    print(){
        console.log(`name: ${this.name}  age: ${this.age}`);
    }
}
 
let tom = new User("Tom", 36);
tom.print();        // name: Tom  age: 36

//

class User {
  
    readonly name: string = "Default user";
    age: number;
    constructor(userName: string, userAge: number) {
 
        this.name = userName;
        this.age = userAge;
    }
    print(){
        console.log(`name: ${this.name}  age: ${this.age}`);
    }
}
 
let tom = new User("Tom", 36);
tom.name = "Bob";       // ! Ошибка - поле name - только для чтения
tom.print();                    // name: Tom  age: 36