let table = document.getElementsByTagName("table")[0];
let chosenColor = "Red";
document.getElementById("add-row").addEventListener("click", makeRow);
table.addEventListener("click", colorize);

function makeRow() {
  const row = document.createElement("tr");
  for (let i = 0; i < 30; i++) {
    const td = document.createElement("td");
    row.appendChild(td);
  }
  table.appendChild(row);
}

function colorize(event) {
  let target = event.target;
  if (target.className.length) {
    target.className = "";
  } else {
    target.className = chosenColor;
  }
  console.log("Color!");
}

let select = document.querySelector("select");
select.addEventListener("change", function (event) {
  chosenColor = event.target.value;
});
