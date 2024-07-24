// class User {
//   public email: string; // Accessible from anywhere.
//   private name: string; //  if we  dont want  to access it then use private and we can access it within the class
//   readonly city: string = "jaipur"; // when we use readonly we are allow to acces it but not set it
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

// we can writ it with different way 


class User {
 
  // private _courseCount:number = 1
  protected _courseCount:number = 1
  

  readonly city: string = "jaipur"; // when we use readonly we are allow to acces it but not set it
  constructor(
    public email: string,  
    public name: string
  ) {
   //getter
  }
  get  getAppleEmail(): String{
    return  `apple ${this.email}`
  }

  get courseCount():number {
    return this._courseCount
  }
  // setter 
   set courseCount(courseNum){
    if (courseNum<=1) {
      throw new Error("courseCount should be more then 1")
      
    }
    this._courseCount= courseNum
   }
}

// Inheritance

class subUser extends User {
  isFamily :boolean = true
  changeCourseCount(){
    this._courseCount = 4   // to resolve this error we use the keyword protected, this keyword help to access within the class as well as any class which inherites that class
  }
}

const abhay = new User("h@gmail.com", "abhay");
//   abhay.city = "bengaluru";
// abhay.name
