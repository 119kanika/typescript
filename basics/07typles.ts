// const user: (string | number)[] = [1, 'hc']

let TupleUser: [string, number, boolean]

TupleUser = ['hc', 123, true]

let rgb: [number, number, number] = [255, 234, 123]

type User = [number, string]

const newUser: User = [122, 'kan@com']

newUser[1] = 'hc.com'
// newUser.push(true)


export {}