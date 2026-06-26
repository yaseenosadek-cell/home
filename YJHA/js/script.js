const counter = document.getElementById("counter");

// July is month 6 because JavaScript months start from 0.
const startDate = new Date(2024, 6, 26);

function updateCounter() {
    const today = new Date();

    const difference = today - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    counter.textContent = `${days} Days Together ❤️`;
}

updateCounter();

const jojo = document.getElementById("jojo");
const zozy = document.getElementById("zozy");
const sansony = document.getElementById("sansony");
const nony = document.getElementById("nony");
const home = document.getElementById("home");

const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");

const body = document.body;

function setTheme(theme) {

    body.classList.remove(
        "theme-home",
        "theme-sansony",
        "theme-jojo",
        "theme-zozy",
        "theme-nony"
    );

    body.classList.add(theme);

}

jojo.onclick = function() {
    setTheme("theme-jojo");
    image2.src = "../images/j1.jpg"
    image3.src = "../images/j2.jpg"
    
}
nony.onclick = function() {
        setTheme("theme-nony");

    image2.src = "../images/h1.jpg"
    image3.src = "../images/h2.jpg"
    
}
sansony.onclick = function() {
    setTheme("theme-sansony");
    image2.src = "../images/y1.jpg"
    image3.src = "../images/y2.jpg"
    
}
zozy.onclick = function() {
    setTheme("theme-zozy");
    image2.src = "../images/m2.jpg"
    image3.src = "../images/m1.jpg"
    
}

home.onclick = function() {
    setTheme("theme-home");
    image2.src = "../images/main2.jpg"
    image3.src = "../images/main3.jpg"
}

const photo = document.getElementById("random");
const changeBtn = document.getElementById("changeBtn");

const photos = [
    "./images/main.jpg",
    "./images/main2.jpg",
    "./images/main3.jpg",
    "./images/main4.jpg",
    "./images/main5.jpg",
    "./images/main6.jpg",
    "./images/main7.jpg",
    "./images/main8.jpg",
    "./images/main9.jpg",
    "./images/main10.jpg"
];

let currentIndex = 0;

photo.style.transition = "opacity 0.8s ease";

changeBtn.addEventListener("click", function () {

    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * photos.length);
    } while (randomIndex === currentIndex);

    currentIndex = randomIndex;

    photo.style.opacity = "0";

    setTimeout(function () {

        photo.src = photos[currentIndex];
        photo.style.opacity = "1";

    }, 500);

});

const surpriseBtn = document.getElementById("surpriseBtn");
const message = document.getElementById("message");

const surprises = [
    "❤️ I love you more every day.",
    "🌹 You make my life beautiful.",
    "😊 Your smile is my favorite thing.",
    "🫶 You're my safe place.",
    "💕 Thank you for always being with me.",
    "💖 Every day with you is special.",
    "🥰 You're my favorite person.",
    "🌍 I'd choose you in every lifetime.",
    "✨ You're the best thing that ever happened to me.",
    "❤️ Forever starts with you."
];

message.style.transition = "opacity 0.5s";

surpriseBtn.addEventListener("click", function () {

    message.style.opacity = "0";

    setTimeout(function () {

        const randomIndex = Math.floor(Math.random() * surprises.length);
        message.textContent = surprises[randomIndex];

        message.style.opacity = "1";

    }, 500);

});

const hearts = ["❤️","💖","💕","💗","💘","💝","🩷"];

document.addEventListener("click", function(event){

    const heart = document.createElement("span");

    const random = Math.floor(Math.random() * hearts.length);

    heart.innerHTML = hearts[random];

    heart.classList.add("heart");

    heart.style.left = event.clientX + "px";
    heart.style.top = event.clientY + "px";

    document.body.appendChild(heart);

    setTimeout(function(){

        heart.remove();

    },2000);

});