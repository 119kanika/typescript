let score: number | string = 33;

score = "thirty three"

type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let kanika: User | Admin = {
    name: "kanika", id: 32
}

kanika = {username: "km", id: 32}

//arrays

const mixArray: (number | string)[] = [1,2,3,4,5, "6"]


let pi: 3.14 = 3.14

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "middle"