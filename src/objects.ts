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
    score: number;

    constructor(email:string , name:string){
        this.email = email,
        this.name = name,
        this.score = 0
    }
    login(){
        console.log(`${this.email}, just logged in`);
        return this     
    }
    logout(){
        console.log(`${this.email}, just logged out`); 
        return this    
    }
    updateScore(){
        this.score++;
        console.log(`${this.email} score is now ${this.score}`);
        return this
    }
}

var userOne = new User('Waz@angelassist.org' , 'Waz')
console.log(userOne);
var userTwo = new User('Meen@angelassist.org' , 'Meen')
console.log(userTwo);

userOne.login().updateScore().updateScore().logout()

// the 'new' keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constructor method