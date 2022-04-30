/*const m = document.querySelector(".policka");

//m.innerHTML = `<button id="pole">  </button>`;

const s = `<button id="pole">  </button>`;

const pole = [
  `${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}
  ${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}
  ${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}
  ${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}
  ${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}
  ${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}
  ${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}
  ${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}
  ${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}
  ${s}${s}${s}${s}${s}${s}${s}${s}${s}${s}`,
];

m.innerHTML = pole;

console.log("funguje");

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  alert("baf");
});
*/
const tlacitko = document.querySelectorAll("button");
let player = "circle";

tlacitko.forEach((btn) =>
  btn.addEventListener("click", (event) => {
    if (player == "circle") {
      event.target.className = "board__field--circle";
      btn.disabled = true;
      player = "cross";
      document.querySelector("#hraje").innerHTML =
        'HRAJE: <img id="kolecko" src="podklady/2ukol/cross.svg" >';
    } else {
      event.target.className = "board__field--cross";
      btn.disabled = true;
      player = "circle";
      document.querySelector("#hraje").innerHTML =
        'HRAJE: <img id="kolecko" src="podklady/2ukol/circle.svg" "/>';
    }
  })
);

const getSymbol = (field) => {
  // Název třídy přizpůsob tvému kódu.
  if (field.classList.contains("board__field--cross")) {
    return "cross";
  } else if (field.classList.contains("board__field--circle")) {
    return "circle";
  }
};

const boardSize = 10; // 10x10
const fields = document.querySelectorAll(".pole"); // Selektor pozměň tak, aby odpovídal tvému kódu.
const getField = (row, column) => {
  return fields[row * boardSize + column];
};

console.log(fields);
