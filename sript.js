let [computer_score, user_score] = [0, 0];
let result_ref = document.getElementById("result");

let choices_object = {
  rock: {
    rock: "draw",
    scissor: "win",
    paper: "lose",
  },
  scissor: {
    rock: "lose",
    scissor: "draw",
    paper: "win",
  },
  paper: {
    rock: "win",
    scissor: "lose",
    paper: "draw",
  },
};

function checker(input) {
  let choices = ["rock", "paper", "scissor"];
  let num = Math.floor(Math.random() * 3);
  let computer_choice = choices[num];

  document.getElementById("comp_choice").innerHTML =
    `Computer chose <span>${computer_choice.toUpperCase()}</span>`;
  document.getElementById("user_choice").innerHTML =
    `You chose <span>${input.toUpperCase()}</span>`;

  switch (choices_object[input][computer_choice]) {
    case "win":
      result_ref.style.cssText = "background-color: #10f72fff; color: #181a16ff";
      result_ref.innerHTML = "YOU WIN";
      user_score++;
      break;
    case "lose":
      result_ref.style.cssText = "background-color: #ff0c20ff; color: #3a2a2aff";
      result_ref.innerHTML = "YOU LOSE";
      computer_score++;
      break;
    default:
      result_ref.style.cssText = "background-color: #c0babaff; color: #1b1919ff";
      result_ref.innerHTML = "DRAW";
      break;
  }

  document.getElementById("computer_score").innerHTML = computer_score;
  document.getElementById("user_score").innerHTML = user_score;
}

function resetGame() {
  user_score = 0;
  computer_score = 0;
  document.getElementById("computer_score").innerHTML = 0;
  document.getElementById("user_score").innerHTML = 0;
  result_ref.innerHTML = "";
  document.getElementById("comp_choice").innerHTML = "";
  document.getElementById("user_choice").innerHTML = "";
  result_ref.style.cssText = "";
}
