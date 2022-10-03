
const displayTextWon = document.getElementById("won");
const displayTextTie = document.getElementById("tie");
const displayTextLost = document.getElementById("lost");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const opponent_rock = document.getElementById("opponent-rock");
const opponent_paper = document.getElementById("opponent-paper");
const opponent_scissors = document.getElementById("opponent-scissors");

const restart = document.getElementById("restart");

let döntetlen = 0;
let nyert = 0;
let vesztett = 0;

let clicked = false;


rock.addEventListener("click", () => {

    if(!clicked) {

        paper.style.visibility = "hidden";
        scissors.style.visibility = "hidden";

        opponent_click = Math.floor(Math.random() * 3);


        if(opponent_click == 0) {
        
            opponent_paper.style.visibility = "hidden";
            opponent_scissors.style.visibility = "hidden";
            opponent_rock.style.visibility = "visible";
            

            döntetlen += 1;
            displayTextTie.textContent = "Döntetlen: " + döntetlen;

            clicked = true;
        }
        else if(opponent_click == 1){
        
            opponent_scissors.style.visibility = "hidden";
            opponent_rock.style.visibility = "hidden";
            opponent_paper.style.visibility = "visible";
            

            vesztett += 1;
            displayTextLost.textContent = "Vesztett: " + vesztett;

            clicked = true;
        }
        else {
        
            opponent_rock.style.visibility = "hidden";
            opponent_paper.style.visibility = "hidden";
            opponent_scissors.style.visibility = "visible";
            

            nyert += 1;
            displayTextWon.textContent = "Nyert: " + nyert;

            clicked = true;
        }
        restart.style.visibility = "visible";
    }
})

paper.addEventListener("click", () => {
    
    if(!clicked) {
        scissors.style.visibility = "hidden";
        rock.style.visibility = "hidden";
    
        opponent_click = Math.floor(Math.random() * 3);
    
        if(opponent_click == 0) {
            
            opponent_paper.style.visibility = "hidden";
            opponent_scissors.style.visibility = "hidden";
            opponent_rock.style.visibility = "visible";
            
    
            nyert += 1;
            displayTextWon.textContent = "Nyert: " + nyert;
    
            clicked = true;
        }
        else if(opponent_click == 1){
            
            opponent_scissors.style.visibility = "hidden";
            opponent_rock.style.visibility = "hidden";
            opponent_paper.style.visibility = "visible";
            
    
            döntetlen += 1;
            displayTextTie.textContent = "Döntetlen: " + döntetlen;
    
            clicked = true;
        }
        else {
            
            opponent_rock.style.visibility = "hidden";
            opponent_paper.style.visibility = "hidden";
            opponent_scissors.style.visibility = "visible";
            
    
            vesztett += 1;
            displayTextLost.textContent = "Vesztett: " + vesztett;
    
            clicked = true;
        }
        restart.style.visibility = "visible";
    }
})

scissors.addEventListener("click", () => {


    if(!clicked) {
        rock.style.visibility = "hidden";
        paper.style.visibility = "hidden";
        
        opponent_click = Math.floor(Math.random() * 3);
    
        if(opponent_click == 0) {
            
            opponent_paper.style.visibility = "hidden";
            opponent_scissors.style.visibility = "hidden";
            opponent_rock.style.visibility = "visible";
            
    
            vesztett += 1;
            displayTextLost.textContent = "Vesztett: " + vesztett;
    
            clicked = true;
        }
        else if(opponent_click == 1){
            
            opponent_scissors.style.visibility = "hidden";
            opponent_rock.style.visibility = "hidden";
            opponent_paper.style.visibility = "visible";
            
    
            nyert += 1;
            displayTextWon.textContent = "Nyert: " + nyert;
    
            clicked = true;
        }
        else {
            
            opponent_rock.style.visibility = "hidden";
            opponent_paper.style.visibility = "hidden";
            opponent_scissors.style.visibility = "visible";
            
    
            döntetlen += 1;
            displayTextTie.textContent = "Döntetlen: " + döntetlen;
    
            clicked = true;
        }

        restart.style.visibility = "visible";
    }
})

restart.addEventListener("click", () => {
    
    restart.style.visibility = "hidden";
    
    opponent_rock.style.visibility = "hidden";
    opponent_paper.style.visibility = "hidden";
    opponent_scissors.style.visibility = "hidden";

    rock.style.visibility = "visible";
    paper.style.visibility = "visible";
    scissors.style.visibility = "visible";

    clicked = false;
    
})