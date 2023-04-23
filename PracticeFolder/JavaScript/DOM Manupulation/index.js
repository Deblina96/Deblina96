//DOM Manupulation

/*let p=document.getElementsByClassName('list items')
console.log(p)

let container = document.querySelector('div')
console.log(container) */

// CSS Style change

/*const k = document.querySelector('#main-heading')
k.style.color = 'red'
console.log(k)

const items = document.querySelectorAll(".list-items")

for(let i=0;i<items.length; i ++)
{
  items.style.color = "yellow"
}

console.log(items) */

/*const ul=document.querySelector('ul')
const li = document.createElement('li')

ul.append(li)

li.innerText="X-Men" */

let p = document.querySelector("ul") 
//console.log(p.parentNode)
//console.log(p.parentElement)

//let html= document.documentElement
//console.log(html.children)

p.childNodes[3].style.backgroundColor = "cyan"

p.childNodes[1].style.backgroundColor = "yellow"
