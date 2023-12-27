"use strict";
// class User {
//     public email: string
//     name: string
//     private readonly city: string = "Jaipur"
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        // private _courseCount = 1 
        this._courseCount = 1;
        this.city = "Jaipur";
    }
    //getter
    get getAppleEmail() {
        return `apple.${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count more than 1 please");
        }
        this._courseCount = courseNum;
    }
    deleteToken() {
        console.log("Token deleted");
    }
}
//child class cannot acquire private properties of parent class. But protected can be used.
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const kanika = new User("Kanika@gmail", "Kanika");
// kanika.city
// kanika.deleteToken()
