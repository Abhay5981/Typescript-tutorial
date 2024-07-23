interface User {
    readonly  dbId: number
    email:string
    userId:number
    googleId?: number

    // startTrail: () => string  // methods 
    startTrail(): string // another way to writ this method 

    getCoupon(couponname: string, value: number):number
}

interface User {    // inheritance
    gethubToken: string
}

interface  Admin  extends User {
    role: "admin" | "ta" | "learner"
}

const Abhya:Admin = {  dbId: 22,
     email:"abc@gmail.com", 
     userId:45878 ,
     role: "admin",
     gethubToken:"gethub",
    startTrail: () => {
    return "trail started"
},
getCoupon: (name: "abhay10", off: 10 )=>{
    return 10
}

}

Abhya.email = "abc@gmail.com"
// Abhya.dbId = 24   // can not assine any value beacuse it is a readonley 


