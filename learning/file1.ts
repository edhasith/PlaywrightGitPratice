console.log("Hey tantan");

const name:string = "Hasith D Dio";
const age = 30;


function repeat(word:string){
    word = word.toLowerCase()
    let isRepeat = false;
    for(let w of word){
     if(word.indexOf(w) !== word.lastIndexOf(w)){
        isRepeat = true
        break;
     }
     
     }
     console.log(`is repeating = ${isRepeat}`)
} 

repeat(name)



function sort(){
    const arr1 = [1,2,3,5,8];
    const arr2 = [4,7,9];
    let arr3 = [...arr1,...arr2];
    console.log(arr3);

    arr3 =arr3.filter(x => x%2===0)
    console.log(arr3);



} 



