const name=("Salar ")
const repCount=50
console.log (name+repCount+"Value")//this tachique is outdated 



// modern way is below
console.log(`my Name is ${name}, My repCountis ${repCount}`)

// declaring string
const gameName=new String("Need for Speed - 2")//this is object here 
console.log(gameName[0])
console.log(gameName._proto_)
console.log(gameName.length)
console.log(gameName.toLowerCase())
console.log(gameName.charAt(5))
console.log(gameName.indexOf("S"))
// console.log(gameName.indexOf("s"))

const newString =gameName.substring(0,6)
console.log (newString)

const anotherString=gameName.slice(-4,2)
console.log(anotherString)

const newString2="    Salar khan marwat      "
console.log(newString2.trim())

const url='https://computer.com/%20'
console.log(url.replace('%20','-'))//this will replace %20 by - this
console.log (url.includes('computer'))//this will give as boolean value
console.log(gameName.split('$'))

