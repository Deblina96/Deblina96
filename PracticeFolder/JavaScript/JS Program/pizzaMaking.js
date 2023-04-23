function getcheese(makeDough) {

  setTimeout(() => {

          const cheese = "🧀"

          console.log("here is your ordered", cheese)
          makeDough(cheese)

  }, 3000)
}

function makeDough(cheese, bakePizza){

  setTimeout(()=>{
    const dough= "🫓 " + cheese
          console.log("here is the dought", dough)
          bakePizza(dough)
  }, 2000)
}

function bakePizza(dough, callback){

  setTimeout(()=>{
    const pizza=  "🍕 "+ dough
          console.log("here is the pizza", pizza)
          callback(num)
  }, 2000)
}

function finishPizza(num){

  console.log("Pizza making done")
}
