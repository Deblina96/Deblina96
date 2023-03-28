let ran_num = Math.floor(Math.random()*100) //generate random number
console.log(ran_num)
let guess =0
let p
do{
  

  p=(prompt("enter your guessed number")) //taking user input
   guess=guess+1;

  if(p>ran_num)
   console.log("the number is smaller")
  else if(p<ran_num)
  console.log("the number is bigger")
  else
  console.log("the correct number")
}while(p != ran_num && guess<5)

if(guess >5)
  console.log("you have used all the guesses")