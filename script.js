/* / Activate strict mode */
'use strict'

/* Selecting elements */
const questionsEl = document.querySelectorAll('.questions')
const answersEl = document.querySelectorAll('.answers')
const icons = document.querySelectorAll('#plus-icon')

/* Function: To show/hide icon/ans */

/* Function: To update the icon */
const updateIcons = function (index, isHidden) {
    icons[index].src = isHidden
        ? 'assets/images/icon-plus.svg'
        : 'assets/images/icon-minus.svg'
}

/*  Add click eventListener to questions */
questionsEl.forEach((question, index) => {
    question.addEventListener('click', function () {
        const isHidden = answersEl[index].classList.toggle('hidden')
        updateIcons(index, isHidden)
    })
})

/* Add click eventListener to icon */
icons.forEach((icon, index) => {
    icon.addEventListener('click', function () {
        const isHidden = answersEl[index].classList.toggle('hidden')

        updateIcons(index, isHidden)
    })
})

/* Add keydown eventListener  */

document.addEventListener('keydown', function (e) {
    if (e.key === 'tab') {
    }
})
