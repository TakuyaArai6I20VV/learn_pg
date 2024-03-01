// accept user input

// let username = window.prompt("What's your username?");

// console.log(username);

document.getElementById("mySubmit").onclick = function () {
  username = document.getElementById("myText").value;
  document.getElementById("h1").textContent = `Welcome ${username}!`;
}
