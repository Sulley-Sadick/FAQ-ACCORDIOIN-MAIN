/* Activate strict mode */
'use strict'

/* select elements */
const answers = document.querySelectorAll('.answers')
const buttons = document.querySelectorAll('.button')
const icons = document.querySelectorAll('#plus-icon')

// Add smooth appearance of the page
window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('opacity-0')
    document.body.classList.add('opacity-100')
})

/* Add eventListener to button */
buttons.forEach((button, index) => {
    button.addEventListener('click', function () {
        const isActive = answers[index].classList.toggle('hidden')

        /* /calling hideAnswers function */
        hideAnswers(index)

        /* calling update icon */
        changeIcon(index, isActive)
    })
})

/* Function: To remove all answers except the index  */
const hideAnswers = function (exceptIndex) {
    answers.forEach((answer, index) => {
        if (index !== exceptIndex) {
            answer.classList.add('hidden')
            changeIcon(index, true)
        }
    })
}
/* Function: To update icons */
const changeIcon = function (index, isActive) {
    icons[index].src = isActive
        ? 'assets/images/icon-plus.svg'
        : 'assets/images/icon-minus.svg'
}
