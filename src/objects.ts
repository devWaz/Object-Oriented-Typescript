// var userOne = {
//     email: 'waz@angelassist.com',
//     name: 'Waz',
//     login():void {
//         console.log(`${this.email} has logged in`);
//     },
//     logout():void {
//         console.log(`${this.email} has logged out`);
//     }
// }

// console.log(userOne.logout());

// Class Constructors
class User {
    email: string;
    name: string;
    constructor(email:string , name:string){
        this.email = email,
        this.name = name
    }
}

var userOne = new User('Waz@angelassist.org' , 'Waz')
console.log(userOne);
var userTwo = new User('Meen@angelassist.org' , 'Meen')
console.log(userTwo);

// the 'new' keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constructor method