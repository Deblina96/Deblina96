/*let p1 = new Promise((resolve, reject) => {

  setTimeout(() => {

          //console.log("I am promise 1")
          resolve("resoved after 3 sec")
  }, 3000)
})
let p2 = new Promise((resolve, reject) => {

  setTimeout(() => {

          //console.log("I am promise 2")
          resolve("resoved after 4 sec")
  }, 4000)
})
let p3 = new Promise((resolve, reject) => {

  setTimeout(() => {

          //console.log("I am promise 3")
          resolve("resoved after 5 sec")
  }, 5000)
})

/*p1.then((value)=>{
  console.log(value)
})
p2.then((value)=>{
  console.log(value)
})
p3.then((value)=>{
  console.log(value)
}) */


//let p_all = Promise.all([p1,p2,p3])
//let p_all = Promise.allSettled([p1,p2,p3])
//let p_all = Promise.any([p1,p2,p3])
//let p_all = Promise.race([p1,p2,p3])
//p_all.then((value)=>{
//  console.log(value)
//}) 

function getcheese(makeDough) {
  setTimeout(() => {
    const cheese = "🧀";
    console.log("here is your ordered", cheese);
    makeDough(cheese, bakePizza);
  }, 3000);
}

function makeDough(cheese, bakePizza) {
  setTimeout(() => {
    const dough = "🫓 " + cheese;
    console.log("here is the dough", dough);
    bakePizza(dough, 3, () => {
      console.log("Finished making pizzas!");
    });
  }, 2000);
}

function bakePizza(dough, numPizzas, callback) {
  if (numPizzas === 0) {
    callback();
    return;
  }
  setTimeout(() => {
    const pizza = "🍕 " + dough;
    console.log("here is the pizza", pizza);
    bakePizza(dough, numPizzas - 1, callback);
  }, 2000);
}

bakePizza("initial dough", 3, (pizza) => {
  console.log(pizza);
});