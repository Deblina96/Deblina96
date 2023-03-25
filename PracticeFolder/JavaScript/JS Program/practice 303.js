//string practice
console.log("har\r".length)

//use .includes 
let sentence =`Deblina is a very good girl`
let word="very"
console.log(sentence.includes(word))
console.log(`the word ${word} ${sentence.includes(word) ? "is" : "is not"} there`)

//give only amount from a sentence

let sentence1="i am the biggest fan of manchester united. rashford is currently the best player in the world and erik ten haag is obviously the best baldy manager of all time"
let amount=sentence1.slice("dont take my ".length,"rupees you idiot".length)
let amount=sentence1.slice(13,16)
console.log(amount)

let p="Deblina karmakar"
console.log(p.slice(3,9)) // takes characters from index position 3 to index position 8, where starting index position is 0

//string can not changed
let name = "Deblina"
name[2]=K
console.log(name)