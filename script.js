/* ==========================================
   SIMPLE ROMANTIC SURPRISE
========================================== */

// Wait until the page loads
window.addEventListener("load", () => {

    // Hide loader after 2 seconds
    setTimeout(() => {
        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
        }, 1000);

    }, 2000);

});



/* ==========================================
   TYPEWRITER
========================================== */

const message = "I Made This Just To Make You Smile ❤️";

const typing = document.getElementById("typing");

let index = 0;

function typeWriter() {

    if (index < message.length) {

        typing.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter, 80);

    }

}

typeWriter();



/* ==========================================
   MUSIC
========================================== */

const music = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");

// Autoplay browsers block audio with sound; we allow user click to unmute.
music.muted = true;

let playing = false;

musicBtn.addEventListener("click", () => {

    if (!playing) {

        music.muted = false;
        music.play().catch(()=>{});

        musicBtn.innerHTML = "⏸";

        playing = true;

    } else {

        music.pause();

        musicBtn.innerHTML = "🎵";

        playing = false;

    }

});



/* ==========================================
   LOVE LETTER
========================================== */

const beginBtn = document.getElementById("beginBtn");

const popup = document.getElementById("letterPopup");

const closeBtn = document.getElementById("closeLetter");

const letterText = document.getElementById("letterText");

const fullLetter = `

Hey Beautiful ❤️

I don't know how today has been for you,

but I wanted to make something that could
put a smile on your face.

You are kind,
beautiful,
smart,

and you deserve happiness every single day.

Whenever life gets difficult,

remember that someone is thinking about you
and hoping you're smiling.

Thank you for being you.

❤️

`;

beginBtn.addEventListener("click", () => {

    popup.style.display = "flex";

    music.play();

    musicBtn.innerHTML = "⏸";

    playing = true;

    letterText.innerHTML = "";

    typeLetter();

});

closeBtn.addEventListener("click", () => {

    popup.style.display = "none";

});



/* ==========================================
   LETTER TYPEWRITER
========================================== */

let letterIndex = 0;

function typeLetter() {

    if (letterIndex < fullLetter.length) {

        letterText.innerHTML += fullLetter.charAt(letterIndex);

        letterIndex++;

        setTimeout(typeLetter, 35);

    }

}



/* ==========================================
   PHOTO GALLERY
========================================== */

const photos = [

    "assets/photo1.jpg",

    "assets/photo2.jpg",

    "assets/photo3.jpg",

    "assets/photo4.jpg"

];

let current = 0;

const gallery = document.getElementById("galleryImage");

setInterval(() => {

    current++;

    if (current >= photos.length) {

        current = 0;

    }

    gallery.classList.remove("fadeImage");

    void gallery.offsetWidth;

    gallery.classList.add("fadeImage");

    gallery.src = photos[current];

}, 4000);



/* ==========================================
   FLOATING HEARTS
========================================== */

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (20 + Math.random() * 25) + "px";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.getElementById("hearts-container").appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

setInterval(createHeart, 500);



/* ==========================================
   PETALS
========================================== */

function createPetal() {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌸";

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.animationDuration = (6 + Math.random() * 5) + "s";

    document.getElementById("petals-container").appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 12000);

}

setInterval(createPetal, 900);



/* ==========================================
   STARS
========================================== */

const stars = document.getElementById("stars");

for (let i = 0; i < 120; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "%";

    star.style.top = Math.random() * 100 + "%";

    star.style.animationDuration = (2 + Math.random() * 4) + "s";

    stars.appendChild(star);

}



/* ==========================================
   REPLAY
========================================== */

document.getElementById("restart").addEventListener("click", () => {

    location.reload();

});


/* ==========================================
   BACKGROUND IMAGE (from window.backgroundImageFile)
========================================== */

(function applyBackgroundImage() {

    const file = window.backgroundImageFile;

    if (!file) return;


    const layer = document.getElementById('bgImageLayer');
    if (!layer) return;

    // Supports spaces in filenames automatically as URL string.
    layer.style.backgroundImage = `url("${file}")`;
})();
