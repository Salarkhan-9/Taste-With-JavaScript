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
 [mySym]:"MyKey1", //this square brackets ,if we want symbole data type of it instead of string . 
 location:'Abbottabad',
 email:'salarkhan842@gmail.com',
 isloggedIn:false,
 lastloginDays:['monday', 'saturday']

}
Object.freeze(JsUser)//this will freese the object

// console.log(JsUser."Full Name")
console.log(JsUser.emial)
console.log(JsUser.["email"])
console.log(JsUser["Full Name"])
console.log(JsUser.mySym)//this will give my key1 =but its datatype is string it dont acts as symbole


JsUser.greeting=function(){
    console.log ("hello to JS")

}
console.log(JsUser.greeting()
)