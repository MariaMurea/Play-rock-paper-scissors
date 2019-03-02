
function playGame() {
   var player = document.querySelector('input[name="option"]:checked').value;    
   var values = new Array("rock", "paper", "scissor");  
   var computer = values[Math.floor(Math.random() * values.length)];
     
   function gameRules() {
      
            // PLAYER WINS
      if (player === "paper" && computer === "rock") {
         document.getElementById('winner').innerHTML = "PLAYER WINS";
         document.getElementById('playerImg').src = "paper.png";
         document.getElementById('computerImg').src = "rock.png";      
         return ("player wins");
      }
      if (player === "rock" && computer === "scissor") {
         document.getElementById('winner').innerHTML = "PLAYER WINS";
         document.getElementById('playerImg').src = "rock.png";
         document.getElementById('computerImg').src = "scissors.png";      
         return ("player wins");
      }
      if (player === "scissor" && computer === "paper") {
         document.getElementById('winner').innerHTML = "PLAYER WINS";
         document.getElementById('playerImg').src = "scissors.png";
         document.getElementById('computerImg').src = "paper.png";
         return ("player wins");
      }
   
            // COMPUTER WINS
      if (player === "paper" && computer === "scissor") {
         document.getElementById('winner').innerHTML = "COMPUTER WINS";
         document.getElementById('playerImg').src = "paper.png";
         document.getElementById('computerImg').src = "scissors.png";
         return ("computer wins");
      }
      if (player === "rock" && computer === "paper") {
         document.getElementById('winner').innerHTML = "COMPUTER WINS";
         document.getElementById('playerImg').src = "rock.png";
         document.getElementById('computerImg').src = "paper.png";
         return ("computer wins");
      }
      if (player === "scissor" && computer === "rock") {
         document.getElementById('winner').innerHTML = "COMPUTER WINS";
         document.getElementById('playerImg').src = "scissors.png";
         document.getElementById('computerImg').src = "rock.png";
         return ("computer wins");
      }
   
            // SAME PICK
      if (player === computer) {
         document.getElementById('winner').innerHTML = "SAME PICK"; 
         document.getElementById('playerImg').src = "hand.gif";
         document.getElementById('computerImg').src = "roboHand.gif";       
         return ("Try again");
      } else {
         document.getElementById('winner').innerHTML = "We have a big problem"; 
         return ("We have a big problem");
      }   
   } 
   console.log(player);
   console.log(computer);
   console.log(gameRules());
}



 