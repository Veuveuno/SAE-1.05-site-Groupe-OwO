const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})