// 1 - var let e const

var x = 10 
var y = 15

if (y > 10){
    var x = 5
    console.log(x)
}

console.log(x)

let a = 10 
let b = 15

if (b > 10){
    let a = 5
    console.log(a)
}

console.log(a)

let i = 100

for(let i = 0; i < 5; i++){
    console.log(i)
}

console.log(i)

function logName() {
    const name = 'Rafael'
    console.log(name)
}

const name = 'pedro'

logName()
 
console.log(name)



// 2- arrow function

const sum = function sum(a , b){
    return a + b
}
console.log(sum(5,5))

const arrowSum = (a, b) => {
    return a + b
}
console.log(arrowSum(5, 5))


const greeting = (name) => {
    if (name){
        return 'Ola' + name + "!"
    } else {
        return 'Ola'
    }
}


console.log(greeting("Rafael"))
console.log(greeting())

const testeArrow = () => console.log('testou')

testeArrow()

const user = {
    name: "Rafa"
    sayUserName () {
        
    }
}