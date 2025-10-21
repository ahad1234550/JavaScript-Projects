const boxes = document.querySelectorAll(".boxes .box");

let sign = "X";

boxes.forEach((box, index) => {
  boxes[index].addEventListener("click", () => {
    boxes[index].classList.add(sign == "X" ? "color-x" : "color-o");
    boxes[index].textContent = sign;
    boxes[index].disabled = true;
    checkWin();
    if (sign == "X") {
      sign = "O";
    } else {
      sign = "X";
    }
  });
});

const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWin = () => {
  win.forEach((combo) => {
    const a = boxes[combo[0]].textContent;
    const b = boxes[combo[1]].textContent;
    const c = boxes[combo[2]].textContent;
    if (a !== "" && a === b && b === c) {
      const resultDiv = document.getElementById("result");
      for (let i = 0; i < 3; i++) {
        boxes[combo[i]].classList.add("win");
      }
      resultDiv.textContent = `Player ${a} wins!`;
      won();
    }
  });
};

const reset = () => {
  boxes.forEach((box) => {
    box.textContent = "";
    box.disabled = false;
    box.classList.remove("color-x");
    box.classList.remove("color-o");
    box.classList.remove("win");
  });
  document.getElementById("result").textContent = "";
  sign = "X";
};

const won = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};
