class Food{

  constructor(name,type){
          this.name = name
          this.type= type
  }

  required(){
          return "yes"
  }

  human(){
          console.log(this.name + " can be eated by human as type is " + this.type)
  
  }

  animal(){
          console.log(this.name + " can not be eated by animals as type is " + this.type)}

  
}
  


class Pizza extends Food{

  constructor(pizzatype,size){
          this.ptype = pizzatype
          this.size = size
  }

  isHealthy(){
          return "no"
  }

  
}
const f = new Food("Pommes","snack")
const p = new Pizza("margerita","L")

f.required()
f.animal()
f.human()

p.human()
p.isHealthy()
