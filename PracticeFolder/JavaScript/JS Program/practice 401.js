//const cars = ["BMW","BENZ", "TOYOTA"]
//cars[0]= "opel"
//console.log(cars)

//using for Loop print array
const cars = ["BMW","BENZ", "TOYOTA", "Audi", "jaguar"]
/*for(let i=0; i<cars.length; i++)
{
  console.log(cars[i].toLowerCase())

}*/

let b = cars.push("Skoda")
console.log(cars, b)
delete cars[4]
console.log(cars)
console.log(cars[4])

//sort method
const a = [4,6,9,0,2]
console.log(a.sort())