const User = {
  name: "hitesh",
  email: "rausha@gmail.com",
  isActive: true
}


// function createUser({name: string, isPaid: boolean}){}


let newUser = {name : "hitesh", isPaid: false, email: "h@h.com"}



// createUser(newUser)







function createCourse():{name:string, price: number}{
  return {name: "reactjs", price: 399}
}



// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// }

// type Mystring = string

// function createUser(user: User): User{
//   return {name: "", email: "", isActive: true};
// }


// createUser({name: "", email: "", isActive: true})


type User = {
  readonly _id: string
  name: string
  email: string
  isActive: boolean
  credCardDetails?: number
}


let myUser : User = {
  _id: "1234",
  name: "h",
  email: "h@h.com", 
  isActive: false
}

myUser.email= "h@gmai.com"
// myUser._id = "12"


type cardNumber = {
  cardNumber: string
}



type cardDate = {
  cardDate: string
}


type cardDetails = cardNumber & cardDate & {
  cvv: number
}
















export {}