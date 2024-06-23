let score:number | string = 33

score = 44

score = "55";

// type User = {
//   name: string;
//   id:number;
// }

// type Admin = {
//   username: string;
//   id:number
// }

// let hitesh: User | Admin = {name: "raushan", id: 334}

// hitesh = {username: "rk", id : 334}


getDbId(3)
getDbId("3")

function getDbId(id: number | string){
  // making some API calls
  if(typeof id ==="string"){
    id.toLowerCase()
  }
  // id.toLowerCase()

  // console.log(`DB id is : ${id}`);
}



const data: number[] = [1,2, 3]
const data2: string[] = ["1", "2", "3"]

const data3: (string | number)[] = ["1", "2", 3]

let pi: 3.14 = 3.14

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew"