const prompt = require("prompt-sync")();

console.log("Choose an exercise:");
console.log("1. Check positive or negative");
console.log("2. Print Good morning or Good afternoon");
console.log("3. Assign a grade");
console.log("4. Check weekday or weekend"); 
let choice = Number(prompt("Enter your choice from 1 to 4: "));

switch(choice) {

    case 1:{
        // program that checks if number is + or -
        let number = Number(prompt("Enter Your Number : "));
        if(number<0){
            console.log(number + " negitive");
        }
        else if(number>0){
            console.log(number + " positive");
        }
        else{
            console.log(" Zero");
        }
        break;
    }
    case 2:{
        // program that print good morning or good afternoon
        let time = Number(prompt("Enter the time in 24-hour: "));
        if(time<12){
        console.log("Good Morning")
        }
        else {
        console.log("Good Afternoon")
        }
        break;
    }
    case 3:{
        // program that assign grades
        let grades = Number(prompt("Enter Your Grades :"));
        if(grades>=90 && grades<=100){
            console.log("A");
        }
        else if(grades>=80 && grades<=89){
            console.log("B");
        }
        else if(grades>=70 && grades<=79){
            console.log("C");
        }
        else if(grades>=0 && grades<=70){
            console.log("F");
        }
         break;
    }

    case 4:{
        // program check weekday or weekend
        let day = prompt("Enter a day of the week: ");
        if(day==="Friday" || day==="Saturday"){
            console.log("Weekend");
        }
        else{
            console.log("Weekday");
        }
        break;
    }
    default: {
        console.log("Invalid choice");
        break;
    }
}