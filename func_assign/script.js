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

function play_game(){
    const userInput = prompt(`Choose between (1-3):
    1. Rock
    2. Paper
    3. Scissors`)

    let comp_choice = getcompchoice();
    let user_choice;

    if(userInput == 1){
        user_choice = "Rock";
    }else if(userInput == 2){
        user_choice = "Paper";
    }else if(userInput == 3){
        user_choice = "Scissors";
    }


    if(user_choice === comp_choice){
        console.log("Draw");
    }
    else if(user_choice == "Rock"){
        if(comp_choice == "Paper"){
            console.log("You Lost!");
            comp_score +=1;
        }
        else if(comp_choice == "Scissors"){
            console.log("You Won!");
            userscore+=1;
        }
    }

    else if(user_choice == "Paper"){
        if(comp_choice == "Scissors"){
            console.log("You Lost!");
            comp_score+=1;
        }
        else if(comp_choice == "Rock"){
            console.log("You Won!");
            userscore+=1;
        }
    }


    else if(user_choice == "Scissors"){
        if(comp_choice == "Rock"){
            console.log("You Lost!");
            comp_score+=1;
        }
        else if(comp_choice == "Paper"){
            console.log("You Won!");
            userscore+=1
        }
    }

    console.log('Your choice: %s', user_choice);
    console.log('Computer choice: %s', comp_choice);
    console.log('Your current score %d', userscore);
    console.log('Computer current score: %d', comp_score);
}

let userscore = 0;
let comp_score = 0;

while(true){
    if(userscore!= 5 && comp_score!= 5){
    play_game();
    }
    else if(userscore == 5){
        console.log("You won the game!")
        break;
    }
    else if(comp_score == 5){
        console.log("You lost the game!")
        break;
    }
}








