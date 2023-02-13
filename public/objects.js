"use strict";
var userOne = {
    email: 'waz@angelassist.com',
    name: 'Waz',
    login() {
        console.log(`${this.email} has logged in`);
    },
    logout() {
        console.log(`${this.email} has logged out`);
    }
};
console.log(userOne.logout());
