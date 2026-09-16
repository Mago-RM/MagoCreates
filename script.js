const gamesButton = document.getElementById("games-button");
const sjsuButton = document.getElementById("sjsu-button");
const codeButton = document.getElementById("code-button");

const gamesExperience = document.getElementById("games");
const codeExperience = document.getElementById("code");
const sjsuExperience = document.getElementById("sjsu");

gamesExperience.style.display = "block";
gamesExperience.classList.add("slide");
codeExperience.style.display = "none";
sjsuExperience.style.display = "none"
gamesButton.classList.add("active");


/*      Listeners       */
gamesButton.addEventListener("click", function () {
    gamesExperience.style.display = "block";
    gamesExperience.classList.add("slide");
    codeExperience.style.display = "none";
    sjsuExperience.style.display = "none";

    gamesButton.classList.add("active");
    codeButton.classList.remove("active");
    sjsuButton.classList.remove("active");
});

codeButton.addEventListener("click", function () {
    gamesExperience.style.display = "none";
    codeExperience.style.display = "block";
    codeExperience.classList.add("slide");
    sjsuExperience.style.display = "none";

    gamesButton.classList.remove("active");
    codeButton.classList.add("active");
    sjsuButton.classList.remove("active");
});

sjsuButton.addEventListener("click", function () {
    gamesExperience.style.display = "none";
    codeExperience.style.display = "none";
    sjsuExperience.style.display = "block";
    sjsuExperience.classList.add("slide");

    gamesButton.classList.remove("active");
    codeButton.classList.remove("active");
    sjsuButton.classList.add("active");
});


/*              Carousel.  */

const nextButton = document.querySelector(".next-project");
const prevButton = document.querySelector(".prev-project");
let currentProject = 0;
const projectCards = document.querySelectorAll(".project_card");
const featuredProject = document.querySelector(".featured-project");



nextButton.addEventListener("click", function () {
    currentProject = currentProject + 1;
    
    if (currentProject == projectCards.length) {
        currentProject = 0;
    }

    featuredProject.innerHTML = projectCards[currentProject].innerHTML;
});

prevButton.addEventListener("click", function () {
    currentProject = currentProject - 1;

    if (currentProject == projectCards.length) {
        currentProject = 0;
    }

    featuredProject.innerHTML = projectCards[currentProject].innerHTML;
});