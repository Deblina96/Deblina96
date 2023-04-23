async function getweather(){

  let myweather = new Promise((resolve, reject) => {
          setTimeout(() => {
                  resolve("4 Degree")

          }, 2000)

  })

  let yourweather = new Promise((resolve, reject) => {

          setTimeout(() => {
                  resolve("40 Degree")

          }, 4000)


  })

let m = await myweather
let y = await yourweather
return [m, y]
}

console.log("welcome to weather department")
let getW = getweather();
console.log(getW)
