// a feature of TypeScript that allows us to define the structure or shape of an object and specify the properties and methods that an object has or should have.

interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: () => string
    startTrail(): string,
    getCoupon(couponName: string): number
}

//we can extend it, reopen it
interface User {
    githubToken: string
}

//with interface we get inheritance
interface Admin extends User{
    role: "Admin" | "TA" | "learner"
}

let kanika: Admin = {
    dbId: 22, email: "kanika@com", userId: 2211,
    role: "Admin",
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "kanika10") => {
        return 10
    },
    githubToken: "github"
}

kanika.email = "k@gmail"

export { }

// diff btw interface and type 