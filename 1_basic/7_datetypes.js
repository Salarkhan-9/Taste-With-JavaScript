// /Dates
let myDate=new Date()
console.log(myDate.toString())
console.log(myDate.toDateString)
console.log(typeof myDate)//this object in JavaScript
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())


let myCreatedDate =new Date (2024,0,12)//in JavaScript month starts from 0 zero
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleDateString())



//////////////comparing Dates ----

let myCreatedDate1=new Date("01-11-2023")
console.log(myCreatedDate1.toLocaleString())

let myTimeStamp=Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())

console.log(Math.floor(Date.now()/1000))//coverting ,Mili Seconds to Seconds we will divide it by 1000 and to round it for we will use Math.floor()

let newDate =new Date()
console.log(newDate)
console.log(newDate.getDate())
console.log(newDate.getMonth())

new Date().toLocaleString("default", {
    weekday: "long"
});
