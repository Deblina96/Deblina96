// using map function
let arr =[1,3,9,4,6]
let p=arr.map((element,index)=>{
  console.log(element,index,arr)
  return (element +1)
  })
console.log(p)

//using filter
let arr2 =[1,3,9,4,6,98,100]
let t =arr2.filter((item)=>{
  return item>10

})
console.log(t)

//using reduce
let arr3 =[1,3,9,4,6,98,100]
let k=arr3.reduce((n1,n2,n3)=>{
  return n1+n2*n3

})
console.log(k)
