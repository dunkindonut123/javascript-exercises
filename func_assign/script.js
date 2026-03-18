function getcompchoice(){
    let random_choice = Math.floor(Math.random() * 3);
    if(random_choice == 1){
        return "Rock";
    }
    else if(random_choice==2){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

const userInput = prompt(`Choose between (1-3):
    1. Rock
    2. Paper
    3. Scissors`)

let comp_choice = getcompchoice();
let user_choice;
if(userInput == 1){
    user_choice = "Rock";
}
else if(userInput == 2){
    user_choice = "Paper";
}
else if(userInput == 3){
    user_choice = "Scissors";
}
else{
    console.log("Invalid choice");
}


if(user_choice === comp_choice){
    console.log("Draw");
}
else if(user_choice == "Rock"){
    if(comp_choice == "Paper"){
        console.log("You Lost!");
    }
    else if(comp_choice == "Scissors"){
        console.log("You Won!");
    }
}

else if(user_choice == "Paper"){
    if(comp_choice == "Scissors"){
        console.log("You Lost!");
    }
    else if(comp_choice == "Rock"){
        console.log("You Won!");
    }
}


else if(user_choice == "Scissors"){
    if(comp_choice == "Rock"){
        console.log("You Lost!");
    }
    else if(comp_choice == "Paper"){
        console.log("You Won!");
    }
}

console.log('Your choice: %s', user_choice);
console.log('Computer choice: %s', comp_choice);