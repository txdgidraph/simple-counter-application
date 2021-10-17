let countEL = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
  count += 1;
  countEL.innerText = count;
}
function decrement() {
  if (count == 0) {
    //
  } else {
    count = count - 1;
    countEL.innerText = count;
  }
}
function save() {
  saveEl.textContent += count + " - ";
}
