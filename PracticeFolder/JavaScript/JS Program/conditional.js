//using for loop print marks

//create object
const marks={

  Riya: 44,
  Simi: 67,
  Jinia:8,
  Ammna:5
}

//create for loop

for(let i=0; i<Object.keys(marks).length; i++)
{
 //console.log("The marks of " + Object.keys(marks)[i] + "is" + marks[Object.keys(marks)[i]])

}

//using for in Loop

for(let i in marks)
{//console.log(i)
  console.log("the marks of " + i + " is " + marks[i])


}

