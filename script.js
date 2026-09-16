const gamesButton = document.getElementById("games-button");
const sjsuButton = document.getElementById("sjsu-button");
const codeButton = document.getElementById("code-button");

const gamesExperience = document.getElementById("games");
const codeExperience = document.getElementById("code");
const sjsuExperience = document.getElementById("sjsu");

gamesExperience.style.display = "block";
codeExperience.style.display = "none";
sjsuExperience.style.display = "none"


/*      Listeners       */
gamesButton.addEventListener("click", function () {
    gamesExperience.style.display = "block";
    codeExperience.style.display = "none";
    sjsuExperience.style.display = "none";

    gamesButton.classList.add("active");
    codeButton.classList.remove("active");
    sjsuButton.classList.remove("active");
});

codeButton.addEventListener("click", function () {
    gamesExperience.style.display = "none";
    codeExperience.style.display = "block";
    sjsuExperience.style.display = "none";

    gamesButton.classList.remove("active");
    codeButton.classList.add("active");
    sjsuButton.classList.remove("active");
});

sjsuButton.addEventListener("click", function () {
    gamesExperience.style.display = "none";
    codeExperience.style.display = "none";
    sjsuExperience.style.display = "block";

    gamesButton.classList.remove("active");
    codeButton.classList.remove("active");
    sjsuButton.classList.add("active");
});