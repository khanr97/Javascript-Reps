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
    for(i=0;i<ninjas.length;i++) {
        ninjas[i] = ninjas[i].toUpperCase()
    }
    console.log(ninjas)