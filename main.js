function showMatchaLatte() {
  document.getElementById("matcha-latte").style.display = "block";
  document.getElementById("show-matcha").style.display = "none";
}

function submitInput() {
  const input = document.getElementById("input").value;
  if (input) {
    alert(`It's so cool that your favourite kind of matcha is ${input}! My favourite kind is an iced strawberry matcha latte. 🍓`);
  } else {
    alert("You didn't enter anything! :(");
  }
}