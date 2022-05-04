// tenhle úkol byl nad moje síly, prostě jsem ho obšlehla od Kristýny Švandové
//Nebyla jsem schopná sama vymyslet řešení v zadaném čase
const buttons = document.querySelectorAll(".pole");
const players = ["circle", "cross"];
const players_czech = ["kolečko", "křížek"];
let a = 0;
const fieldSize = 10;
const symbolsToWin = 5;

const getSymbol = (evt_target) => {
  if (evt_target.classList.contains("board__field--circle")) {
    return "circle";
  } else if (evt_target.classList.contains("board__field--cross")) {
    return "cross";
  }
};

const getField = (row, column) => {
  return buttons[row * fieldSize + column];
};

const getPosition = (evt_target) => {
  let buttonIndex = 0;
  while (buttonIndex < buttons.length && evt_target !== buttons[buttonIndex]) {
    buttonIndex++;
  }
  return {
    row: Math.floor(buttonIndex / fieldSize),
    column: buttonIndex % fieldSize,
  };
};

const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);

  let i;
  let j;

  let inRow = 1;
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  // Koukni doprava
  i = origin.column;
  while (
    i < fieldSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;
  // Koukni nahoru
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  // Koukni dolu
  i = origin.row;
  while (
    i < fieldSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }
  //Koukni doleva nahoru
  let inDiagonal1 = 1;
  i = origin.row;
  j = origin.column;
  while (i > 0 && j > 0 && symbol === getSymbol(getField(i - 1, j - 1))) {
    inDiagonal1++;
    i--;
    j--;
  }
  //Koukni doprava dolů
  i = origin.row;
  j = origin.column;
  while (
    i < fieldSize - 1 &&
    j < fieldSize - 1 &&
    symbol === getSymbol(getField(i + 1, j + 1))
  ) {
    inDiagonal1++;
    i++;
    j++;
  }
  if (inDiagonal1 >= symbolsToWin) {
    return true;
  }
  //Koukni doprava nahoru
  let inDiagonal2 = 1;
  i = origin.row;
  j = origin.column;
  while (
    i > 0 &&
    j < fieldSize - 1 &&
    symbol === getSymbol(getField(i - 1, j + 1))
  ) {
    inDiagonal2++;
    i--;
    j++;
  }
  //Koukni doleva dolů
  i = origin.row;
  j = origin.column;
  while (
    i < fieldSize - 1 &&
    j > 0 &&
    symbol === getSymbol(getField(i + 1, j - 1))
  ) {
    inDiagonal2++;
    i++;
    j--;
  }
  if (inDiagonal2 >= symbolsToWin) {
    return true;
  }

  return false;
};

const move = (evt) => {
  evt.target.classList.add(`board__field--${players[a]}`);
  isWinningMove(evt.target);
  if (isWinningMove(evt.target)) {
    if (window.confirm(`Vyhrál ${players_czech[a]}`)) {
      location.reload();
    }
  }
  evt.target.disabled = true;
  a += 1;
  if (a === players.length) {
    a = 0;
  }
  document.querySelector("#kolecko").src = `podklady/2ukol/${players[a]}.svg`;
};

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener("click", move);
}
