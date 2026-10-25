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
    name: "Rafa",
    sayUserName () {
        var self = this
        setTimeout(function() {
            console.log(this)
            console.log("Username:" + this.name)
        }, 500)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this)
            console.log('Username:' + this.name)
        }, 700)
    },
}

user.sayUserName()
user.sayUserNameArrow()

// filter
const arr = [1, 2, 3, 4 , 5]

const highNumbers = arr.filter((n) =>  {
    if(n  >= 3) {
        return n
    }
})

console.log(highNumbers)

const users =[
    {name: "Rafa", availabre: true},
    {name: "Rafael", availabre: true},
    {name: "Rafaela", availabre: true},
    {name: "Rafinha", availabre: false},
    {name: "fael", availabre: false} 
]

const availableUsers = users.filter((user) => user.availabre) // avalia os que são true
const notAvailableUsers = users.filter((user) => !user.availabre) // avalia os que são false
console.log(availableUsers)

// map
const products = [
    {name: "camisa", price: 10.99, category: "roupas"},
    {name: "chaleira", price: 49.99, category: "eletro"},
    {name: "fogão", price: 400, category: "eletro"},
    {name: "calça", price: 50.99, category: "roupas"},
]

products.map((product) => {
    if(product.category === "roupas"){
        product.onSale = true
    }
}
)

console.log(products)

// template literals
const names = "Rafael"
const idade = 24
const greetingg = `Olá, ${names}! Você tem ${idade} anos.`
console.log(greetingg)

//destructuring
const fruits = ["mela", "banena", "laranja"]
const [f1, f2, f3] = fruits
console.log(f1)
console.log(f2)
console.log(f3)

const productsDetails = {
    name: "camisa",
    price: 10.99,
    category: "roupas"
}

const {name: productName, price, category} = productsDetails
console.log(productName)
console.log(price)
console.log(category)

// spread operator
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
const a3 = [...a1, ...a2] // spred operator ... cria um array unico
console.log(a3)

const a4 = [0, ...a1, 4]
console.log(a4)

const carName = {Name: 'gol'}
const carBrand = {marca: "VW"}
const otherInfos = {Km: 10000, preice: 20000}

const car = {...carName, ...carBrand, ...otherInfos, wheels: 4}
console.log(car)


// classes

class Products {
    constructor(name, preice) {
        this.name = name
        this.price = price
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt =new Products("Camisa gola v" , 20)

console.log(shirt.name)
console.log(shirt.productWithDiscount(10))
console.log(shirt.productWithDiscount(50))
