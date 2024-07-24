const score: Array<number> = []
const names: Array<string> = []


function identityOne(val:boolean | number): boolean | number{
    return val;
}

 function identityTwo(val:any):any{
    return val;
 }

 function identityThree<Type>(val:Type):Type{
    return val;
 }

//  identityThree(true)


//  we can also write in this way

function identityFour<T>(val:T):T{
    return val;
}


interface Bootle{
    brand:string,
    type:number
}

// identityFour<Bootle>({brand: "Cola", type:5})



function getSearchProduct<T>(products : T[]):T {
    // do some databased operation
    const myIndex =0

    return products[myIndex]
}


//Now how to convert this function in to a arrow function

 const getMoreSearchProduct = <T,>(products:T[]):T =>{   // there is a , in <T,> that indicate that its not a jsx syntex. its a generic syntex.
const myIndex = 4

    return products[myIndex]
}


// **  another type 
interface Database{
    connection:string,
    username: string,
    password: string
}

function codeFunction<T, U extends Database>(valOne:T, valTwo:U):object{   //use case of this function
    return{
        valOne,
        valTwo
    }
}

codeFunction(3, {connection: "dbc", username: "alok@", password: "abcd"})

// function codeFunction<T, U extends number>(valOne:T, valTwo:U):object{
//     return{
//         valOne,
//         valTwo
//     }
// }

// codeFunction(3, "4")



//  ** Generic class creation 

interface  Quiz{
    name: string,
    type: string
}

interface Course {
    name : string,
    auther: string,
    subject: string
}

class sellable <T>{
    public cart: T[] = []
    

    addToCart(products:T){
        this.cart.push(products)
    }
}