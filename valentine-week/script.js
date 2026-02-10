const days = [
  {
    title: "🌹 Rose Day",
    message: `This rose is a small sign of my big love for you.
Just like this flower, my feelings grow more beautiful every day.
Happy Rose Day, my love 🌹❤️`,
  },
  {
    title: "💍 Propose Day",
    message: `Being with you feels right and natural.
My heart chose you without any doubt.
Happy Propose Day, my forever 💍💕`,
  },
  {
    title: "🍫 Chocolate Day",
    message: `You make my life sweeter than chocolate.
Every moment with you feels warm and special.
Happy Chocolate Day, my sweet love 🍫❤️`,
  },
  {
    title: "🧸 Teddy Day",
    message: `I wish I could send you a teddy that hugs you tight.
Until then, imagine me holding you close.
Happy Teddy Day, my comfort 🧸💕`,
  },
  {
    title: "🤝 Promise Day",
    message: `I promise to stand by you in every situation.
My love for you will never change.
Happy Promise Day, my always 🤝❤️`,
  },
  {
    title: "🤗 Hug Day",
    message: `Your hugs make everything better.
In your arms, I feel safe and complete.
Happy Hug Day, my safe place 🤗💕`,
  },
  {
    title: "😘 Kiss Day",
    message: `A kiss from you makes my heart smile.
It feels soft, warm, and full of love.
Happy Kiss Day, my heartbeat 😘❤️`,
  },
  {
    title: "❤️ Valentine’s Day",
    message: `You are my favorite person and my greatest blessing.
Loving you is the best part of my life.
Happy Valentine’s Day, my forever love ❤️💕`,
  },
];

function showPopup(index) {
  document.getElementById("popupTitle").innerText = days[index].title;
  document.getElementById("popupMessage").innerText = days[index].message;
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function playMusic() {
  const music = document.getElementById("bgMusic");
  music.play();
}
// Floating Hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 5 + "s";
  heart.style.fontSize = 15 + Math.random() * 25 + "px";

  document.querySelector(".hearts-container").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(createHeart, 500);
