const user = {
    name: "Kanika",
    email: "kanika@gmail",
    isActive: true
}

function createUser({name: string, isPaid: boolean}){}

// createUser() //can't be used like this

createUser({name: "Kanika", isPaid: false}) //call this way

//object: return type {definition}
function createCourse():{name: string, price: number}{ 
    return {name: "reactjs", price: 322}
} 


type User = {
    readonly _id: string
    name: string,
    email: string,
    isActive: boolean
}

type myString = string

// function createUserId(user: User): User{
//     return {name: "", email: "", isActive: true}
// }

// createUserId({name: "", email: "", isActive: true})


let myUser: User = {
    _id: "112",
    name: "k",
    email: "k@k",
    isActive: false
}

myUser.email = "kan@mail"
// myUser._id = "32" //gives error cuz _id is readonly



export {}