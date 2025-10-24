const choices = document.querySelectorAll(".user .users");
let draw = 0;
let drawing = document.querySelector(".draw");
let win = 0;
let winning = document.querySelector(".userpoint");
let loss = 0;
let lossing = document.querySelector(".computerpoint");
let round = 1;
const rounds = document.getElementsByClassName("round");

choices.forEach((choice, index) => {
  choice.addEventListener("click", () => {
    choice.classList.add("border");
    choices.forEach((btn) => (btn.disabled = true));

    const computerchoice = Math.floor(Math.random() * 3) + 1;
    const computer = document.querySelector(".computerresult");
    const p = document.querySelector(".computer p");
    p.classList.add("hide");
    computer.innerHTML = `<strong>Loading...</strong>`;

    setTimeout(() => {
      if (computerchoice == 1) {
        computer.innerHTML = `<button class="users rock"><i class="fa-solid fa-hand-back-fist"></i></button>`;
      } else if (computerchoice == 2) {
        computer.innerHTML = `<button class="users paper"><i class="fa-solid fa-hand"></i></button>`;
      } else {
        computer.innerHTML = `<button class="users scissor"><i class="fa-solid fa-hand-scissors"></i></button>`;
      }

      if (computerchoice == index + 1) {
        draw++;
        drawing.textContent = draw;
      } else if (
        (computerchoice == 3 && index + 1 == 1) ||
        (computerchoice == 1 && index + 1 == 2) ||
        (computerchoice == 2 && index + 1 == 3)
      ) {
        win++;
        winning.textContent = win;
      } else {
        loss++;
        lossing.textContent = loss;
      }

      setTimeout(() => {
        choices.forEach((btn) => (btn.disabled = false));
        choice.classList.remove("border");

        computer.innerHTML = "";
        p.classList.remove("hide");

        round++;
        rounds[0].textContent = round;
      }, 1000);
    }, 1000);
  });
});
