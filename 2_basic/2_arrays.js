const marvel_hero=['Spiderman','Thor','Ironman']
const dc_hero=['Superman','Flash','Batman']

// marvel_hero.push(dc_hero)//this will marge array into array 

// console.log(marvel_hero)

// console.log(marvel_hero[3])//this will print 3rd element which array at 3rd location of array in which it pushed 
// console.log(marvel_hero[3][2])


const concatArr = marvel_hero.concat(dc_hero)//connect both the arrarys
console.log(concatArr)
//
//Spread operater
const allHero= [...dc_hero,...marvel_hero] 
console.log(allHero)


// converting nested array in one array  
const another_array=[1,2,3,[4,5],6,7,[8,9,[10,11,12,[13,14,15]]]]
const realArray =another_array.flat(1)
console.log(realArray)

// making an array 
console.log(Array.isArray("salar"))
console.log(Array.from("salar"))

console.log(Array.from({name:'salar'})) //intresting 
let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))//will make an array
