//Objects 
//literal ways ,singleton ,constructor
//singleton is made form constructor 


//object literals 


Object.create //contructor --like this single ton is made 

const mySym=Symbol("Key1")

const JsUser={

 name:'Salar',
 "Full Name":"Salar khan",
 age:23,
 mySym:"MyKey1",
 location:'Abbottabad',
 email:'salarkhan842@gmail.com',
 isloggedIn:false,
 lastloginDays:['monday', 'saturday']

}


console.log(JsUser."Full Name")
console.log(JsUser.emial)
console.log(JsUser.["email"])
console.log(JsUser["Full Name"])