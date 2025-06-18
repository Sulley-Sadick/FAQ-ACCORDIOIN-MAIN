/* Activate strict mode */
'use strict'

/* select elements */
const answers = document.querySelectorAll('.answers')
const buttons = document.querySelectorAll('.button')
const icons = document.querySelectorAll('#plus-icon')

/* Function: To update icons */
const updateIcon = function (index, isHidden) {
    icons[index].src = isHidden
        ? 'assets/images/icon-plus.svg'
        : 'assets/images/icon-minus.svg'
}

/* Add eventListener to button */
buttons.forEach((button, index) => {
    button.addEventListener('click', function () {
        const isHidden = answers[index].classList.toggle('hidden')

        /* calling update icon */
        updateIcon(index, isHidden)
    })
})
