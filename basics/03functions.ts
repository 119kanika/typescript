function addTwo(num: number): number{
    // num.toUpperCase();  this will give error now as the method is fir strings not number
    return num + 2;
}

function getupper(val: string){
    return val.toUpperCase()
}

function signupUser(name: string, email: string, isPaid: boolean){}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

function getValue(myVal: number){
    if(myVal > 5) return true;
    return "200";
}

const getHello = (s: string): string => {
    return "";
}

const heros = ["thor", "spiderman", "ironman"]
// const heros = [1, 2, 3]

// heros.map(hero => {
//     return `Hero is ${hero}`
// })

heros.map((hero): string => {
    return `Hero is ${hero}`
})

function consoleError(errMsg: string): void{
    console.log(errMsg);   
}

function handleError(errMsg: string): never{
    throw new Error(errMsg)
}


addTwo(5);
getupper("kanika");
signupUser("kanika", "123@gmail", true);
loginUser('k', 'h.com')

export {}