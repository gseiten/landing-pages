
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    // add the class active if it doesn't exist and vice-versa.
    navbarLinks.classList.toggle('active');
});