// darkmode light mode change
function change() {
  const element = document.querySelector(".body");
  element.classList.toggle("body1");
}

//type rider
const names = ["Web Tool"];
const typer = document.getElementById("typer");
let i = 0;
let n = names.length;
setTimeout(() => {
  let word = names[i];
  let j = 0;
  const value = setInterval(() => {
    if (j < word.length) {
      typer.innerText = typer.innerText.slice(0, -1);
      typer.innerText += word[j];
      typer.innerText += "|";
    } else {
      stopinterval();
    }
    function stopinterval() {
      clearInterval(value);
    }
    j++;
  }, 100);
  i++;
  i = i % n;
  typer.innerText = "";
}, 100);

//to uppercase
const input = document.getElementById("inp");
const para = document.getElementById("para");
const uppercasetext = document.getElementById("button1");
uppercasetext.addEventListener("click", function () {
  para.innerText = input.value;
  para.classList.toggle("uppercase");
  // para.innerText = input.value.toUpperCase();
});

//to lowercase
const uppercasetext2 = document.getElementById("button2");
uppercasetext2.addEventListener("click", function () {
  para.innerText = input.value;
  para.classList.toggle("lowercase");
  // para.innerText = input.value.toLowerCase();
});

//color
function chngcolor() {
  let color = document.getElementById("button3").value;
  para.innerText = input.value;
  if (para.style.color == "black") {
    para.style.color = color;
  } else {
    para.style.color = "black";
  }
}

//Bold
const uppercasetext4 = document.getElementById("button4");
uppercasetext4.addEventListener("click", function () {
  const input = document.getElementById("inp").value;
  para.innerText = input;
  para.classList.toggle("bold");
});

//italic
const uppercasetext5 = document.getElementById("button5");
uppercasetext5.addEventListener("click", function () {
  const input = document.getElementById("inp").value;
  para.innerText = input;
  para.classList.toggle("italic");
});

//capitalize
const uppercasetext6 = document.getElementById("button6");
uppercasetext6.addEventListener("click", function () {
  const input = document.getElementById("inp").value;
  para.innerText = input;
  para.classList.toggle("capitalize");
});
