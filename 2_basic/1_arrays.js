//ARRAY
 const myArrar=[0,1,2,3,4,5] //element are inside the array -no betters array will have same type of data type
console.log(myArrar[3])
const name= ['Ali' ,'Ahmed','Sara']
//array gives shallow copy with shares reference 

//we can delare array in this method also
const myArray2= new Array(1,2,3,4,5)
console.log(myArrar[1])


// Array methods
myArrar.push(7)
myArrar.push(10)
myArrar.pop()//remove the last value of array 


//unshift is used to add element in the start of the array - shift is to remove the start element of the array
myArrar.unshift(9)
myArrar.shift()

console.log(myArrar.includes(11)) //boolean value ,this parameter excites in array or not
console.log(myArrar.indexOf(4))//element location in array 


//this convert array in to string
const newArry=myArrar.join()
console.log(newArry)
console.log(typeof newArry)

//slice splice
console.log('a',myArrar)
const myn1= myArrar.slice(1,3)
console.log(myn1)
console.log('b',myArrar)


const myn2= myArrar.splice(1,3)
console.log('c',myArrar)
console.log(myn2)


// console.log(myArrar)