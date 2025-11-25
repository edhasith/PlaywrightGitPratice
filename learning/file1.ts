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


interface Ob1 {
    name:string,
    age:number,
    jobless: boolean

}

const person1: Ob1 = {
    name : 'Hasith',
    age : 30 ,
    jobless : false
}

const person2: Ob1 = {
    name : 'Jon',
    age : 45 ,
    jobless : true
}


let peeps : Ob1[] = [person1, person2]


console.log(`${person1.name} is jobless =  ${person1.jobless}`)