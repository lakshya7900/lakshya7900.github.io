const toggleBtn = document.getElementsByClassName("toggle_button")[0]
const navBarLinks = document.getElementsByClassName("navbar_links")[0]

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active')
    navBarLinks.classList.toggle('active')
})