//*****************Numbers*************** */
const score=400
console.log(score)

const balance =new Number (100)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const anotherNumber=23.43534
console.log(anotherNumber.toPrecision(4))//the will also round the decimal point ,

const money=100000000
console.log(money.toLocaleString())

//*****************************Math Library**************************** */



console.log(Math)//this is object in itselfs


console.log(Math.abs(-8))
console.log(Math.round(-8.3499))
console.log(Math.ceil(-8.9))
console.log(Math.floor(-8.4))
console.log(Math.min(-7,4,3,99))
console.log(Math.max(23,3,5,2,67,42,0.2))

console.log(Math.random())

//to avoid zero we add 1 ,we multiple 10 to round the points ,we round off it by floor to have single digit
console.log(Math.floor((Math.random()*10)+1))

//let make Random formula for dice

const max=6
const min=1

console.log(Math.floor(Math.random()*(max-min+1))+min)

