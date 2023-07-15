parota = prompt("Enter the number of parottas ate: ");
const soori = new Promise((resolve,reject) => {
    if (parota==50){
        resolve("50 saptachu soori.. congratulations") }
    else {
        reject("Ella kotaiyum alinga first la irundhu sapudren")}
})

soori.then((captions)=> {
    console.log(captions)
})
.catch((captions)=> {
    console.log(captions)
})
