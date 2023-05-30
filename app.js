const app = {
  init: function () {
    const heart = document.querySelector(".heart");
    heart.addEventListener("click", app.handleFadeOut);
  },

  handleFadeOut: function () {
    const body = document.querySelector("body");
    const background = document.querySelector(".background");
    const divHeart = document.querySelector(".heart");
    const textContainer = document.querySelector("p");
    const monText =
      "Coucou amour ! Je pense que tu te doute deja de ce qu'il ce passe ! Mais après ces 4 ans passez a tes cotés ,Je pense que j'ai compris ce dont j'avais besoin dans ma vie, Toi , ta folie , ta passions , ton amour , ta force , tes rêves et tant de chose encore ...Je n'ai plus envie une minute de ne pas pouvoir t'appeler ma Femme !Alors aujourd'hui je te le demande pour maintenant et a jamais , Veux tu faire de moi l'homme qui deviendras ton mari ? Et pour etre plus solennel :Veut tu m'epouser ?";

    body.classList.add("on");
    background.classList.add("fadeOff");
    divHeart.classList.add("test");
    background.addEventListener("transitionend", () => {
      console.log("Animation completed");
      background.style.display = "none";
      let wordIndex = 0;
      let wordsTyped = 0;
      const typingInterval = setInterval(() => {
        const currentWord = monText.split(" ")[wordIndex];
        textContainer.textContent += currentWord + " ";
        wordIndex++;
        wordsTyped++;

        if (wordIndex === monText.split(" ").length) {
          clearInterval(typingInterval);
        }
      }, 150);
    });
  },
};

document.addEventListener("DOMContentLoaded", app.init);
