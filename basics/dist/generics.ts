function identity(arg: number): number{
    return arg;
}

function Identity(arg: any): any{
    return arg;
}

function GenIdentity<Type>(arg: Type): Type{
    return arg;
}

const arr: Array<number> = []

function idOne(val: boolean | number): boolean | number{
    return val;
}

function idTwo<Type>(val: Type): Type{
    return val;
}

// idTwo(3)
idTwo("Kanika")

function idThree<T>(val: T): T{
    return val;
}


interface Bottle{
    brand: string,
    type: number
}
// idThree<Bottle>({})


//generics with arrays and arrow functions

function getSearchProducts<T>(products: T[]): T{
    const index = 3
    return products[index];
}

const getMoreSearch = <T>(products: T[]): T => {
    const index = 4;
    return products[index]
}



interface DB{
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends DB>(val1: T, val2: U): object {
    return {
        val1,
        val2
    }
}

// anotherFunction(3, {connection: "True", username: "Kan", password: "kan"})


//class type in generics

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    auther: string,
    subject: string
}


class Sellable<T>{
    public cart: T[] = []

    addToCart(products: T){
        this.cart.push(products)
    }
}



