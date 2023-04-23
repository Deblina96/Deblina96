let arr = [

  "Initializing to Network...",
  "Connecting to the service...",
  ".................",
  "Wait for a few minutes",
  "Retrieving username",
  "Username found",
  "Trying PW combination...",
   "***************",
  "Username found",
  "password found"
  
]
 /*
for(let i=0; i<arr.length; i++)
{
  setTimeout(()=>{
    console.log(arr[i])

  },i* 2000)
  
}*/


const sleep = async (second)=>{

  return new Promise((resolve,reject)=>{

          setTimeout(()=>{

         resolve("run successfully")
          }, second * 1000)
  })

  
}

//main function

const hack = async (message)=>{

  await sleep(2)

  console.log(message)
}

//IIFE format for immediate function invocation
  
(async function array(){
  for(let i=0; i<arr.length; i++)
        await hack(arr[i]);
  
})()
  