// Rock, Paper, Scissors Game

// determine win:
//  R beats S
//  S beats P
//  P beats R

// ties: both are same
// loss: otherwise

// user pick: use prompt()
// comp pick: generate random number 0-2 and get key of choice array.

var gameMechanics = {
    choice: ["Rock","Paper","Scissors"],
    win: 0,
    tie: 0,
    loss: 0,
    userChoice: "",
    compChoice: "",
    roundOutcome: "",
    evalRound: function(user,comp) {
        if (user == "Rock" && comp == "Scissors" ||
            user == "Paper" && comp == "Rock" ||
            user == "Scissors" && comp == "Paper"
        ) {
            // user wins
            this.win++;
            return true;
        } else if (user === comp) {
            // tie
            this.tie++;
            return "TIE";
        } else {
            // comp wins
            this.loss++;
            return false;
        }
    },
    showStats: function(isNotContinuing) {
        var stats = "";
        if (isNotContinuing) {
            stats = "Thank you for playing!\n\n";
        }
        stats += "Game Statistics:\n";
        stats += "Wins: " + this.win + "\n";
        stats += "Losses: " + this.loss + "\n";
        stats += "Ties: " + this.tie
        alert(stats);
        return;
    },
    userChoose: function() {
        while (!gameMechanics.choice.includes(this.userChoice)) { // loop if user choice is out of bounds
            this.userChoice = prompt("Choose \"Rock\", \"Paper\", or \"Scissors\":");
        }
        alert("You chose " + this.userChoice);
    },
    compChoose: function() {
        while (!this.choice.includes(this.compChoice)) { // loop if user choice is out of bounds
            this.compChoice = this.choice[Math.floor(Math.random() * this.choice.length)];
        }
        alert("Computer chose " + this.compChoice + "...");
    },
    play: function() {
        gameMechanics.userChoose(this.userChoice);
        gameMechanics.compChoose(this.compChoice);
    
        // evaluate game
        this.roundOutcome = gameMechanics.evalRound(this.userChoice,this.compChoice);
        if (this.roundOutcome === true) {
            alert("You win!");
        } else if (this.roundOutcome === false) {
            alert("You lose!");
        } else {
            alert("You tied. Laaaaaaaaaaame.");
        }
    
        // show stats
        gameMechanics.showStats(false);

        // reset
        this.userChoice = "";
        this.compChoice = "";
        if (confirm("Continue game?")){ // ask if want to continue game, then loop back if yes
            this.play();
        }
    }
};

gameMechanics.play();
gameMechanics.showStats(true);

