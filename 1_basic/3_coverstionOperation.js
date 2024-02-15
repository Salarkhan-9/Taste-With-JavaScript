let score="33abc"

console.log(typeof(score))
console.log(typeof score)

let newNum=Number(score)//changing the type 
console.log(typeof newNum)
console.log (newNum)

//NaN if we convert ,invalid mix like 22ades,this can be converted ,gives us NaN
//undefined will also give NaN
//null will give you 0 zero
//"" empty string proves us false
// 1 can be converted into boolean =true 

let isOn=1
let isOnBool=Boolean(isOn)
console.log(isOnBool) //This is possible on 1 or 2

let isLogIn="1"
let isLogBool=Boolean(isLogIn)
console.log(isLogBool)


//*******************************Operations ***********************/

let value=3
let negvalue=-value
console.log(negvalue)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2**3)
console.log(2%3)

let str1="Salar"
let str2="Khan"
let str3= str1+str2
console.log(str3)

//complex problems
console.log("1"+3)
console.log(1+"3")
console.log(1+3+"2")//if number is at the first this will be treated as string 
console.log("1"+3+2)//if string is at the first this will be treated as string 


console.log (+true)
console.log(+"")



let num1,num2,num3
num1=num2=num3=2+4

console.table([num1,num2,num3])

let gameCounter=100
++gameCounter
console.log(gameCounter)