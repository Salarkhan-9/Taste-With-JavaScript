const accountId=14452 //this will remian contant ,can't be changes ,and resigned values
let accountEmail="salarkhan@gmail.com"
var accountPassword="1120" //this also not use nowdays ....because of issue in block scope and functional scope
accountCity="Abbottabad"//not good practics ,but still we can delcare the variable 

accountEmail="salar@gmail.com"
accountPassword="2001"
accountCity="Lakki marwat"
let accountStat   //will give you undefined

console.log(accountId)

console.table([accountId,accountEmail,accountPassword,accountCity,accountStat])