//Task - design a game of rock, paper, scissor. Computer will generate R, P, S randomly. Ask user to choose among R, P & S. Now, with the generated result of computer, the winner will be decided. The game will go on for 10 rounds, whoever (computer vs user) wins the most number of rounds will be declared as a winner. Rule: Rock beats scissor. Scissor beats paper. Paper beats Rock. Use confirm & prompt whenever required.

do
  {
    console.log("Let´s play the game of rock, paper, scissor");
    console.log("*****************");
    round = prompt ("how many rounds you want to play?")
round = Number.parseInt(round);
let user=0, comp=0;
while(round !=0)
  {
    let choice = prompt("choose R for Rock, S for Scissor, P for Paper");
    choice = choice.toUpperCase();
let arr = ["R", "S", "P"];
let index = Math.floor(Math.random() * arr.length);
if (choice == "R" && arr[index] == "S" || choice == "S" && arr[index] == "P" ||choice == "P" && arr[index] == "R")
{
  console.log("yes! you won this round because computer selected ", arr[index]);
  user++;
}
else if(choice == arr[index] )
{
  console.log("same prop used in this round as both of you selected ", arr[index]);
}
else
{
  console.log("oh no ! computer won this round because it selected ", arr[index]);
  comp ++;
} round --;
  }
if (user > comp)
{
  console.log("congratulations ! you have beaten the computer in the game");
}
else if (comp > user)
{
  console.log("Sorry ! The computer has beaten you in the game");
}
else
{
  console.log("The game is a tie");
}
  } while(confirm("do you want to play again?"));

