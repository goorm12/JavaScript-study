const button = document.querySelector(".buttonBox__button");
const number = document.querySelector(".buttonBox__sub-title");

function randomButton(e) {
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  e.preventDefault();
  number.innerHTML = randomNumber;
}

button.addEventListener("click", randomButton);
