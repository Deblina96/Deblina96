const num =[78,24,56,33,0,9,223,1765]
console.log(num.sort(function(a,b){return a - b}))
console.log(typeof a)

//using compare function

/*let compare =(a,b)=>
{
return a -b
}

const num1 =[78,24,56,33,0,9,223,1765]
console.log(num1.sort(compare)) */

//ascending order sorting
let compare1 =(a,b)=>
{
return b - a
}

const num2 =[78,24,56,33,0,9,223,1765]
console.log(num2.sort(compare1))

//Splice and Slice
const num3 =[78,24,56,33,0,9,223,1765]
let p = num3.splice(4,3, 888,99,000,77,55)
console.log(num3)
console.log(p)




