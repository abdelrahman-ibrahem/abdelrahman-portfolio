const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const navMenu = document.querySelector("nav ul");

// Function to show the menu
menuIcon.addEventListener("click", () => {
    navMenu.classList.add("open"); // Show the menu
    menuIcon.style.display = "none"; // Hide the hamburger icon
    closeIcon.style.display = "block"; // Show the close icon
});

// Function to hide the menu
closeIcon.addEventListener("click", () => {
    navMenu.classList.remove("open"); // Hide the menu
    menuIcon.style.display = "block"; // Show the hamburger icon
    closeIcon.style.display = "none"; // Hide the close icon
});


window.addEventListener('scroll', function() {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const skillLevel = bar.getAttribute('data-skill-level');
        const barPosition = bar.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (barPosition < windowHeight) {
            bar.style.width = skillLevel;
        }
    });
});
