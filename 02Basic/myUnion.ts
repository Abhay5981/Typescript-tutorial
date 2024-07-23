let score : number | string 
score = 44
score = "abd"


type User = {
    name: string
    id : number
}
type Admin = {
    username: string
    id: number
}

let abhay: User | Admin = {name:"abhay", id: 245 }

    abhay = {username:"ak", id:5455}


    function getDbId(id:number | string) {
        // console.log(`DB id is : ${id}`);
        if (typeof id === "string"){
            id.toLowerCase()
        }
    }

    getDbId(3)
    getDbId("6")



    //Array 

    const data1: number[] = [1,2,3]
    const data2: string[] = ["1","2","3"]
    const data3 : (string | number | boolean)[] = [1, 2, "3", true]
