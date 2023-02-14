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


class Admin extends User {    
    deleteUser(user:any){
        users = users.filter(u => {
            return u.email != user.email
        })
    }
}

var userOne = new User('Waz@angelassist.org' , 'Waz')
var userTwo = new User('Meen@angelassist.org' , 'Meen')
var userThree = new User('gxd@angelassist.org' , 'gxd')
var admin = new Admin('manu@angelassist.org' , 'manu')

var users: User[] = [userOne , userTwo , userThree , admin]

userOne.login().updateScore().updateScore().logout()

// admin.deleteUser(userOne)

console.log(users);


// the 'new' keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constructor method