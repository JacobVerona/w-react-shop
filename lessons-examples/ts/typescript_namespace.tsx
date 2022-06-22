namespace Personnel {
 
    export interface IUser{
        displayInfo(): void;
    }
     
    export class Employee {
        constructor(public name: string){
        }
    }
     
    export function work(emp: Employee) : void{
        console.log(emp.name, "is working");
    }
     
    export let defaultUser= { name: "Kate" }
     
    export let value = "Hello";
}
 
let tom = new Personnel.Employee("Tom")
Personnel.work(tom);                    // Tom is working
 
console.log(Personnel.defaultUser.name);    // Kate
console.log(Personnel.value);    // Hello

//

namespace Personnel {
    export class Employee {
     
        constructor(public name: string){
        }
    }
    export class Manager {
     
        constructor(public name: string){
        }
    }
}

//

namespace Data{
    export namespace Personnel {
        export class Employee {
         
            constructor(public name: string){
            }
        }
    }
    export namespace Clients {
        export class VipClient {
         
            constructor(public name: string){
            }
        }
    }
}
 
let tom = new Data.Personnel.Employee("Tom")
console.log(tom.name);
 
let sam = new Data.Clients.VipClient("Sam");
console.log(sam.name);

//

namespace Data{
    export namespace Personnel {
        export class Employee {
         
            constructor(public name: string){
            }
        }
    }
}
 
import employee = Data.Personnel.Employee;
let tom = new employee("Tom")
console.log(tom.name);