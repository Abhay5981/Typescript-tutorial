"use strict";
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
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "jaipur"; // when we use readonly we are allow to acces it but not set it
        //getter
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // setter 
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("courseCount should be more then 1");
        }
        this._courseCount = courseNum;
    }
}
const abhay = new User("h@gmail.com", "abhay");
//   abhay.city = "bengaluru";
// abhay.name
