var UserOneEmail = 'waz@angelassist.org';
var userOneName = 'Waz';
var UserOneFriends = ['Meen'];


var UserOneEmail = 'Manu@angelassist.org';
var userOneName = 'Manu';
var UserOneFriends = ['Waz' , 'Meen'];

var UserOneEmail = 'Meen@angelassist.org';
var userOneName = 'Meen';
var UserOneFriends = ['Manu'];

const login = (email:string) => {
    console.log(`${email} , 'is now online'`);   
}

const logout = (email:string) => {
    console.log(`${email} , 'has logged out'`);   
}

const logFriends = (friends:[]) => {
      friends.forEach(friend => {
        console.log(friend);
      })
}

login(UserOneEmail)