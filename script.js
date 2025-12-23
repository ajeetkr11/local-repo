/* Surprise Message */
function showLove() {
    document.getElementById("surprise").classList.toggle("hidden");
}

/* Countdown */
const countdown = document.getElementById("countdown");
const newYear = new Date("January 1, 2026 00:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = newYear - now;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    countdown.innerHTML = `⏳ ${d} Days ${h}h ${m}m ${s}s`;
}, 1000);

/* Floating Hearts */
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️ Twinkle";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}, 500);

/* Fireworks */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function firework() {
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 100; i++) {
        ctx.fillStyle = `hsl(${Math.random()*360},100%,50%)`;
        ctx.beginPath();
        ctx.arc(Math.random()*canvas.width, Math.random()*canvas.height, 2, 0, Math.PI*2);
        ctx.fill();
    }
}

setInterval(firework, 200);
/* Slideshow */
const photos = [
    "c:\\Users\\AJEET KUMAR\\Downloads\\pic (1).jpg",
];

let index = 0;
const slide = document.getElementById("slide");

setInterval(() => {
    index = (index + 1) % photos.length;
    slide.style.opacity = 0;
    setTimeout(() => {
        slide.src = photos[index];
        slide.style.opacity = 1;
    }, 500);
}, 3000);

/* Delayed emotional effect */
setTimeout(() => {
    document.querySelector(".credit").style.opacity = 1;
}, 4000);