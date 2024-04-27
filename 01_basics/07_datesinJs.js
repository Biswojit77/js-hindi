// Dates 

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof(myDate))


let myCreatedDate = new Date(2024, 4, 7)
console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date("07-05-2024")
console.log(myCreatedDate2.toLocaleString())

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate2.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long",
    
})
console.log(newDate.toLocaleString())