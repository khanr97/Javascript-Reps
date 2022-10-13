//Part 2====Javascript Reps=======
for(i=0;i<=20;i++) {
    //console.log(i)
}
//Write a for loop that will log only the even numbers
// in 0 through 200.
for(i=0;i<=200;i+=2) {
    //console.log(i)
}
//fizzbuzz
for(i=1;i<=100;i++) {
    if(i%3===0 && i%5===0) {
        //console.log("FizzBuzz")
    }else if(i%5===0) {
        //console.log("Buzz")
    }else if(i%3===0) {
        //console.log("Fizz")
    }else {
       //console.log(i)
    }
}
//Wild Wild Life 
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
//1)
    plantee[2]=50001
    //console.log(plantee[2])
//2)
    wolfy[3]= "Gotham City"
    //console.log(wolfy[3])
//3)
    dart.push("Hawkins")
    //console.log(dart)
//4)
    wolfy.splice(0,1,"Gameboy")
    //console.log(wolfy)

 //===Yell at Ninja turtles

const ninjas = ["donatello","leonardo","raphael","michaelangelo"]
//     for(i=0;i<ninjas.length;i++) {
//         ninjas[i] = ninjas[i].toUpperCase()
//     }
   // console.log(ninjas)
   const newArr =[]
    for(let element of ninjas) {
        newArr.push(element.toUpperCase())
    }
    //console.log(newArr)

////====Methods revisited favMovies
 const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
 //console.log(favMovies.indexOf('Titanic'))
 //1)
    //console.log(favMovies.sort())
    //sorted alphabetically and mutated the array and returned it

//2)
    favMovies.pop()
   //remove element from the end and returns it
//3)
    favMovies.push("Guardians of the Galaxy")
    //console.log(favMovies)
    //add elements to end of array and return new lenght of array

//4)
    //console.log(favMovies.reverse())
    //reverse the array-not perm

//5)
    favMovies.shift()
    //remove first element and return it-perm

//6)
   favMovies.unshift("chicken","Hi")
    //add new  elements to the front of array and return new array length
    //perm

//7)
    let num = favMovies.indexOf('Django Unchained')
    favMovies.splice(num,0,"Avatar")
    //console.log(favMovies)
    //perm mutation (start,deletecount,what u want to add)

//8)
    let num2= favMovies.length
    let num1= (favMovies.length)/2
    let halfArray= favMovies.slice(num1,num2)
    //returns new array-doesn't perm mutate

//9) returns a new array of (start,end) doesn't include end

//10)
    //console.log(halfArray)

//11)
    //console.log(favMovies)
    console.log(favMovies.indexOf('Fast and Furious'))
    //get a value of -1 idk y

//12) const creates constant reference to array
//does not define constant array 
//we can change elments within constant array
