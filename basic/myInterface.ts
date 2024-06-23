interface User{
  readonly dbId: number
  email: string,
  userId: number
  googleId?: string
  // startTrail: ()=> string
  startTrail(): string
  getCoupon(couponname: string, value: number): number
}


interface User {
  githubToken?: string
}


interface Admin extends User{
  role: "admin" | "ta" | "learner"
}

const hitesh: Admin = {
  dbId: 22, 
  email: "raushankcse@gmail.com", 
  userId: 112,
  role: "admin",
  githubToken: "github",
  startTrail: ()=>{
    return "trail started"
  },
  getCoupon: (name: "raushan10", off: 10)=> {
    return 10
  }
}

hitesh.email = "info@raushankcse.com"

