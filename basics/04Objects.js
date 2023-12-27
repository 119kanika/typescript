"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Kanika",
    email: "kanika@gmail",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
// createUser() //can't be used like this
createUser({ name: "Kanika", isPaid: false }); //call this way
//object: return type {definition}
function createCourse() {
    return { name: "reactjs", price: 322 };
}
// function createUserId(user: User): User{
//     return {name: "", email: "", isActive: true}
// }
// createUserId({name: "", email: "", isActive: true})
var myUser = {
    _id: "112",
    name: "k",
    email: "k@k",
    isActive: false
};
myUser.email = "kan@mail";
