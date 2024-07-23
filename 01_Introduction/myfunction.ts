
function addTwo(num:number): number{
    
    return num + 2;
    // return "hello"
   
}

function getUpper(val:string){
    return val.toUpperCase();
}
interface signUpUserProp {
    name: string,
    email: string,
    isPaid: boolean
}
// { name, email, isPaid }: signUpUserProp): void

function signUpUser(
    name: string,
    email: string,
    isPaid: boolean
 ) {}

// var loginUser = function({ name, email, isPaid }: signUpUserProp): void{
//     
// }

let loginUser = function(name:string, email:string, isPaid:boolean= false){}

let myNum =addTwo(5);
getUpper("abhay");
signUpUser("abhay", "abhay@gmail.com", false);

// loginUser({name:"abhay", email:"abc@gmail.com", isPaid:false});
loginUser("abhay","abc@gmail.com")


// function getVal(myVal:number): boolean{
//     if(myVal>5){
//         return true
//     }
//     return "200 Ok"
// }


let getHello = (s:string):string => {
    return ""
}


const heros = ["thor", "spiderman", "ironman"]
heros.map((hero):string =>{
    return `hero is ${hero}`
})


function consoleError(errormsg:string):void{
    console.log(errormsg);
}

function handleError(errmsg:string):never{
    throw new Error(errmsg);
}


export{}