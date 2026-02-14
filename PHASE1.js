// ===============================
// HERO BUTTON - START EXPERIENCE
// ===============================

const startBtn = document.getElementById("startBtn");
const bgMusic = document.getElementById("bgMusic");

startBtn.addEventListener("click", () => {
    // Start music
    bgMusic.play();

    // Scroll to first chapter
    document.querySelector(".chapter").scrollIntoView({
        behavior: "smooth"
    });
});


// ===============================
// PIVOT BUTTON - GO TO GAME
// ===============================

const futureBtn = document.getElementById("futureBtn");

futureBtn.addEventListener("click", () => {
    document.getElementById("gameSection").scrollIntoView({
        behavior: "smooth"
    });
});


// ===============================
// EXPANDING CARD GAME LOGIC
// ===============================

let selectedCard = null;
let cardOpened = false;

function selectChoice(choiceNumber) {

    const cards = document.querySelectorAll(".card");
    const resultBox = document.getElementById("choiceResult");

    cards.forEach(card => {
        card.classList.remove("expanded");
    });

    const selected = cards[choiceNumber - 1];
    selected.classList.add("expanded");

    selectedCard = selected;

    let message = "";

    if (choiceNumber === 1) {
        message = "Imagine us watching sunsets in different countries, collecting memories like souvenirs. Every journey feels better because it’s with you.";
    }

    if (choiceNumber === 2) {
        message = "A quiet home, soft laughter in the evenings, building something steady and peaceful together. That’s the kind of life I see with you.";
    }

    if (choiceNumber === 3) {
        message = "Dreaming big, working hard, supporting each other endlessly. Whatever mountain we face, we climb it side by side.";
    }

    resultBox.innerHTML = message;

    if (!cardOpened) {
        setTimeout(showFinalButton, 2000);
        cardOpened = true;
    }
}


// ===============================
// SHOW FINAL HIDDEN OPTION
// ===============================

function showFinalButton() {

    const resultBox = document.getElementById("choiceResult");

    const finalBtn = document.createElement("button");
    finalBtn.innerText = "There’s one more choice…";
    finalBtn.style.marginTop = "30px";

    finalBtn.onclick = function () {
        document.getElementById("finalSection").scrollIntoView({
            behavior: "smooth"
        });
    };

    resultBox.appendChild(document.createElement("br"));
    resultBox.appendChild(finalBtn);
}


// ===============================
// FINAL YES BUTTON
// ===============================

function finalYes() {
    const message = document.getElementById("loveMessage");
    message.innerHTML = "I love you;
}


// ===============================
// MARQUE TEXT
// ===============================
     
      const messages = [
        "Hello dear, like many other love story, ours started with a simple stare",
        "followed by the period of overconfidence",
        "I can`t fall for this person, no! i`m bigger than this",
        "then the period where you totally lose all focus, and you stare longer",
        "followed by the period of stucking the person in your heart; thinking of them",
        "then the first conversation that feels like a lottery won, 😂😂 ",
        "Ours stayed through the night, it was one of the best days of my life",
        " then the period of contact conversation and build a bond that ends up becoming memories",
        "then on the 2nd of Feb, i asked the question. 'will you be my girlfriend?'...",
        "You said YES, and it has been history since then.",
      ];

      const textEl = document.getElementById("marquee-text");
      const typingSpeed = 150; // ms per letter
      const fadeSpeed = 40; // ms per letter fade-out
      const delayAfterTyping = 1000; // wait before fading out
      let index = 0;

      async function typeText(text) {
        textEl.textContent = "";
        for (let i = 0; i < text.length; i++) {
          textEl.textContent += text[i];
          await new Promise((res) => setTimeout(res, typingSpeed));
        }
      }

      async function fadeOutText() {
        const text = textEl.textContent;
        for (let i = text.length; i >= 0; i--) {
          textEl.textContent = text.substring(0, i);
          await new Promise((res) => setTimeout(res, fadeSpeed));
        }
      }

      async function runMarquee() {
        while (true) {
          await typeText(messages[index]);
          await new Promise((res) => setTimeout(res, delayAfterTyping));
          await fadeOutText();
          index = (index + 1) % messages.length;
        }
      }

      runMarquee();
      AOS.init({
        duration: 800,
        once: true,
      });

      