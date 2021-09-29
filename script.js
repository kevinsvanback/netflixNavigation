// Store HTML elements in JS-variables
const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

// Add the 'visible' class to the open menu button
openBtn.addEventListener('click', () => {
  nav.forEach(navElement => navElement.classList.add('visible'))
})

// Remove the 'visible' class from the close menu button
closeBtn.addEventListener('click', () => {
  nav.forEach(navElement => navElement.classList.remove('visible'))
})