let user;
let computer;
let userpic;
let comppic;
function userinput(objButton) {
    user = objButton.value; //reading user input
    userpic = document.getElementById('use');
    comppic = document.getElementById('com');
    let compute;
    compute = Math.random(); //generating random number
    if (compute < 0.65 && compute > 0.37) {
        computer = "rock";
    } else if (compute <= 0.37) {
        computer = "paper";
    } else {
        computer = "scissor";
    }

    let compare = function (choice1, choice2)   // function to compare user and computer inputs
    {
        if (choice1 === choice2) {
            return "It's a tie!";
        } else {
            if (choice1 === "rock") {
                if (choice2 === "scissor") {
                    return "cheers!! You win!";      // rock wins
                } else {
                    return "You lose! Better luck next time.";   // paper wins
                }
            }
            if (choice1 === "paper") {
                if (choice2 === "rock") {
                    return "cheers!! You win!";    // paper wins
                } else {
                    return "You lose! Better luck next time.";    // scissors wins
                }
            }
            if (choice1 === "scissor") {
                if (choice2 === "rock") {
                    return "You lose! Better luck next time.";    // rock wins
                } else {
                    return "cheers!! You win!";    // scissors wins
                }
            }
        }
    }
    let results = compare(user, computer);
    if (user === "rock")    //for dynamic changing of user  input images
    {
        userpic.src = 'Images/rockuser.jfif'

    } else if (user === "paper") {
        userpic.src = 'Images/paperuser.jfif'
    } else {
        userpic.src = 'Images/scissoruser.jfif';
    }
    if (computer === 'rock')   //for dynamic changing of computer input images
    {
        comppic.src = 'Images/rockcom.jfif'
    } else if (computer === 'paper') {
        comppic.src = 'Images/papercom.jfif'
    } else {
        comppic.src = 'Images/scissorcom.jfif'

    }
    document.getElementById("user").innerHTML="your choice "+user;
    document.getElementById("computer").innerHTML="computer choice "+computer;
    document.getElementById("res").innerHTML=results;
}