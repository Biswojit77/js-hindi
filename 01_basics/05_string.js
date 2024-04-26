const name = "biswo"
const repoCount = 1

//console.log(name + repoCount + " value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Biswojit-bb')

console.log(gameName[0])
console.log(gameName.__proto__)


console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4))
console.log(gameName.indexOf('t'))


const newString = gameName.substring(0,4);
console.log(newString)

const anotherString = gameName.slice(-8, -2)
console.log(anotherString)

const newString1 = "     biswojit     "
console.log(newString1)
console.log(newString1.trim())

const url = "https://biswojit.com/my%youtubechannel"
console.log(url.replace('%', '-'))

console.log(url.includes('channel'))

console.log(gameName.split('-'))
