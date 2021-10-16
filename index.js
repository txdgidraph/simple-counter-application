//COUNTER APP

function increment() {
  let count = document.getElementById("count-el").innerText;
  count = parseInt(count) + 1;
  document.getElementById("count-el").innerText = count;
}

function decrement() {
  let valueD = document.getElementById("count-el").innerText;
  valueD = parseInt(valueD);
  if (valueD == 0) {
  } else {
    valueD = valueD - 1;
    document.getElementById("count-el").innerText = valueD;
  }
}

let saveEl = document.getElementById("save-el");
console.log(saveEl);
function save() {
  let count = document.getElementById("count-el").innerText;
  let countStr = count + "-";
  saveEl.innerText += countStr;
}
