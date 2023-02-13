var userOne = {
    email: 'waz@angelassist.com',
    name: 'Waz',
    login():void {
        console.log(`${this.email} has logged in`);
    },
    logout():void {
        console.log(`${this.email} has logged out`);
    }
}

console.log(userOne.logout());
