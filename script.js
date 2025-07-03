let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoiceid = choice.getAttribute("id");
        const msg = document.querySelector("#msg");
        const userscorediv = document.querySelector("#user-score");
        const computerscorediv = document.querySelector("#comp-score");

        playgame(userchoiceid, msg, userscorediv, computerscorediv);
    });
});

const compchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const rdidx = Math.floor(Math.random() * 3);
    return options[rdidx];
};

const playgame = (userchoiceid, msg, userscorediv, computerscorediv) => {
    console.log("User choice =", userchoiceid);
    const computerchoice = compchoice();
    console.log("Computer choice =", computerchoice);

    if (userchoiceid === computerchoice) {
        msg.innerText = "It's a tie!";
        msg.style.backgroundColor = "#333";
        return;
    }

    let userwin = false;

    if (
        (userchoiceid === "rock" && computerchoice === "scissors") ||
        (userchoiceid === "paper" && computerchoice === "rock") ||
        (userchoiceid === "scissors" && computerchoice === "paper")
    ) {
        userwin = true;
    }

    if (userwin) {
        msg.innerText = `You win! ${userchoiceid} beats ${computerchoice}`;
        msg.style.backgroundColor = "green";
        userscore++;
        userscorediv.innerText = userscore;
    } else {
        msg.innerText = `You lose! ${computerchoice} beats ${userchoiceid}`;
        msg.style.backgroundColor = "red";
        computerscore++;
        computerscorediv.innerText = computerscore;
    }
};
const restartBtn = document.getElementById("restart-btn");

restartBtn.addEventListener("click", () => {
  location.reload();
});


