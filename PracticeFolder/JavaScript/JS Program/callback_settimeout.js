setTimeout(function f(){
console.log(" Hi There")
}, 4000);

function add(sum){

  console.log("hello");
  sum();
  
}

 add(function sum(){ //sum callback function

console.log("no no")

})

