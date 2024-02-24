const tinderUser=new Object()  //single ton object 
// const tinderUser={} non single ton object

tinderUser.id="FA21-BSE-031"
tinderUser.name="M.Salar Khan"
tinderUser.log=false
console.log(tinderUser)

const regularUser={
    email:"salarkhan842@gmail.com",
    fullname:{
        userFullName:{
            firstname:"Salar",
            lastname:"Khan"
        }
    }
}

console.log(regularUser.fullname.userFullName.lastname)

const obj1={1:'a', 2:'b'}
const obj2={3:'a', 4:'b'}

const obj3