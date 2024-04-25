// Primitive 

// 7 types : Strin,Number ,Boolean, null ,undefined, Symbol, BigInt

const score = 100
const score2 = 100.3
const IsLoggedIn = true
const OutSideTemp = null
let UserEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 349823472394873249



//Reference (Non-Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj={
    name: "Biswojit",
    age: 20
}

const myFunction = function(){
    console.log("Hello")

}

console.log( typeof bigNumber )

//  https://262.ecma-international.org/5.1/#sec-11.4.3  (for documentation)


// ++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myEmailname ="biswojitbejbhola"

let anothername = myEmailname
anothername = "biswojit"

console.log(anothername)
console.log(anothername)

let user = {
    email: "biswojitbejbhola@gmail..com",
    upi: "7735347591@ybl"
}

let user2 = user

user2.email = "biswojit@gmail.com"

console.log(user.email)
console.log(user2.email)

// stack => copy into assign variable
// Heap => reference into assign object

