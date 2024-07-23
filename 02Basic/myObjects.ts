// const user = {
//     name : "abhay",
//     email: "abc@gmail.conm",
//     isActive: true
// }

// function createUser({name:string, isPaid: boolean}) {}

// createUser({name:"abhay", isPaid: true})

// // returing object in a function
// function creatCourse():{name:string, price:number}{
//     return{name:"typScripy", price: 499}
// }



// type Alias

// type User = {
//     name : string;
//     email:string;
//     isActive: boolean;
// };

// function createUser(user:User):User{
//     return ({name:"", email: "", isActive: true})
// }


// createUser({name:"", email: "", isActive:true})



// read only 
 type User = {
    readonly _id:string;
    name: string;
    email: string;
    isActive: boolean;
    creditcardDetails?: number;
 }

let myUser:User ={
    _id:"1234",
    name:"abhay",
    email:"abc@gamil.com",
    isActive:false,
    creditcardDetails:

}


type cardNumber = {
    cardnumber:string;

}
type cardDate = {
    carddate:string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

myUser.email= "alok@gmail.com"

// myUser._id= "12545"  // we can not change the id because its readonly properties;

export{}