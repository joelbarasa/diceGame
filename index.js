//Set first image 
let randomNumber1 = Math.ceil(Math.random() * 6);
imageDisplay ="images/dice"+randomNumber1+".png"
document.querySelectorAll("img")[0].setAttribute("src", imageDisplay);


//Set second image
let randomNumber2 = Math.ceil(Math.random() * 6);
imageDisplay ="images/dice"+randomNumber2+".png"
document.querySelectorAll("img")[1].setAttribute("src", imageDisplay);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").textContent = "Draw....🚧";
} else {
  document.querySelector("h1").textContent = "Player 2 Wins 🚩!";
}
