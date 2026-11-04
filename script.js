
document.addEventListener("DOMContentLoaded", () => {
    // ==============================
    // ELEMENTS
    // ==============================

    const heartLayer = document.getElementById("heart-layer");
    const revealBtn = document.getElementById("reveal-btn");
    const smileBtn = document.getElementById("smile-btn");
    const smileMessage = document.getElementById("smile-message");
    const musicBtn = document.getElementById("music-btn");
    const backgroundMusic = document.getElementById("background-music");

    const visitorMessageForm = document.getElementById("visitorMessageForm");
    const visitorText = document.getElementById("visitorText");
    const messageStatus = document.getElementById("messageStatus");

    const letterCard = document.getElementById("letter-card");
    const message = document.getElementById("message");

    // ==============================
    // FLOATING HEARTS
    // ==============================

    function createFloatingHeart() {
        if (!heartLayer) return;

        const heart = document.createElement("span");
        heart.classList.add("floating-heart");

        heart.innerHTML = ["♥", "♡", "❤", "💕"][
            Math.floor(Math.random() * 4)
        ];

        heart.style.left = Math.random() * 100 + "%";
        heart.style.animationDuration = (5 + Math.random() * 5) + "s";
        heart.style.fontSize = (14 + Math.random() * 20) + "px";
        heart.style.opacity = 0.3 + Math.random() * 0.6;

        heartLayer.appendChild(heart);

        heart.addEventListener("animationend", () => {
            heart.remove();
        });
    }

    setInterval(createFloatingHeart, 1300);

    // ==============================
    // HEART BURST
    // ==============================

    function createHeartBurst() {
        if (!heartLayer) return;

        for (let i = 0; i < 18; i++) {
            const heart = document.createElement("span");

            heart.classList.add("burst-heart");
            heart.innerHTML = "♥";

            heart.style.left = "50%";
            heart.style.top = "50%";

            const angle = (Math.PI * 2 * i) / 18;
            const distance = 70 + Math.random() * 100;

            heart.style.setProperty("--x", Math.cos(angle) * distance + "px");
            heart.style.setProperty("--y", Math.sin(angle) * distance + "px");

            heartLayer.appendChild(heart);

            setTimeout(() => heart.remove(), 1600);
        }
    }

// ==============================
// LETTER REVEAL - FIXED
// ==============================

let letterOpened = false;

if (revealBtn) {
    revealBtn.addEventListener("click", () => {

        createHeartBurst();

        if (letterCard) {
            letterCard.classList.add("show");

            // Keep the letter visible
            letterCard.style.opacity = "1";
            letterCard.style.visibility = "visible";
            letterCard.style.display = "block";
            letterCard.style.transform = "none";

            letterCard.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }

        if (!letterOpened) {
            letterOpened = true;
            startTypewriter();
            createRosePetals();
        }
    });
}


    // ==============================
    // TYPEWRITER MESSAGE
    // ==============================

    const loveMessage = `Dear Mahi,

Some people enter our lives and make ordinary moments feel special.

You are one of those people.

Your smile can make a difficult day better, and your presence brings happiness in the simplest ways.

I may not always have the perfect words, but I hope you know how special you are.

This little website is made with care, just to bring a smile to your face.

Keep smiling, keep shining, and never forget how amazing you are.



        type();
    }

    // ==============================
    // ROSE PETALS
    // ==============================

    function createRosePetals() {
        if (!heartLayer) return;

        for (let i = 0; i < 15; i++) {
            const petal = document.createElement("span");

            petal.classList.add("rose-petal");
            petal.innerHTML = "🌹";

            petal.style.left = Math.random() * 100 + "%";
            petal.style.animationDuration = (4 + Math.random() * 4) + "s";
            petal.style.animationDelay = Math.random() * 3 + "s";

            heartLayer.appendChild(petal);

            setTimeout(() => petal.remove(), 9000);
        }
    }

    // ==============================
    // SMILE BUTTON
    // ==============================

    const sweetMessages = [
        "Your smile is my favorite notification. ❤️",
        "Keep smiling, you make the world brighter. ✨",
        "A little smile looks perfect on you. 💗",
        "You deserve all the happiness in the world. 🌸",
        "Never stop being your wonderful self. ❤️"
    ];

    if (smileBtn) {
        smileBtn.addEventListener("click", () => {
            const randomMessage =
                sweetMessages[Math.floor(Math.random() * sweetMessages.length)];

            if (smileMessage) {
                smileMessage.textContent = randomMessage;
                smileMessage.classList.add("show");
            }

            createHeartBurst();
        });
    }

    // ==============================
    // BACKGROUND MUSIC
    // ==============================

    if (musicBtn && backgroundMusic) {
        musicBtn.addEventListener("click", async () => {
            if (backgroundMusic.paused) {
                try {
                    await backgroundMusic.play();
                    musicBtn.textContent = "♫ Music: On";
                } catch (error) {
                    musicBtn.textContent = "♫ Play Music";
                    console.log("Music could not start:", error);
                }
            } else {
                backgroundMusic.pause();
                musicBtn.textContent = "♫ Music: Off";
            }
        });

        backgroundMusic.addEventListener("ended", () => {
            musicBtn.textContent = "♫ Music: Off";
        });
    }

    // ==============================
    // WHATSAPP MESSAGE FORM
    // ==============================

    if (visitorMessageForm && visitorText) {
        visitorMessageForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const userMessage = visitorText.value.trim();

            if (!userMessage) {
                if (messageStatus) {
                    messageStatus.textContent = "Please write a message first.";
                }
                return;
            }

            const phoneNumber = "917484993096";

            const whatsappMessage =
                "Mahi Website Message 💗\n\n" + userMessage;

            const whatsappURL =
                "https://wa.me/" +
                phoneNumber +
                "?text=" +
                encodeURIComponent(whatsappMessage);

            if (messageStatus) {
                messageStatus.textContent = "Opening WhatsApp...";
            }

            window.open(whatsappURL, "_blank");

            visitorText.value = "";
        });
    }

    // ==============================
    // BUTTON HOVER HEART EFFECT
    // ==============================

    document.querySelectorAll("button").forEach((button) => {
        button.addEventListener("mouseenter", () => {
            button.classList.add("button-hover");
        });

        button.addEventListener("mouseleave", () => {
            button.classList.remove("button-hover");
        });
    });

    // ==============================
    // PAGE LOAD ANIMATION
    // ==============================

    document.body.classList.add("page-loaded");

});
