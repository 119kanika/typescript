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

    // private _courseCount = 1 
    protected _courseCount = 1

    private readonly city: string = "Jaipur"
    constructor(public email: string, public name: string){
    }

    //getter
    get getAppleEmail(): string{
        return `apple.${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {
        if(courseNum <= 1){
            throw new Error("Course count more than 1 please")
        }
        this._courseCount = courseNum
    }

    private deleteToken(){
        console.log("Token deleted")
    }
}

//child class cannot acquire private properties of parent class. But protected can be used.
class SubUser extends User{
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}


const kanika = new User("Kanika@gmail", "Kanika")
// kanika.city

// kanika.deleteToken()







