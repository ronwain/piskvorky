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

console.log("funguje");

const zmenaTlacitka = (event) => {
  event.target.classList.add("board__field--circle");
};

const btn = document.querySelectorAll("button");
for (let i = 0; i < btn.length; i += 1) {
  btn[i].addEventListener("click", zmenaTlacitka);
}
