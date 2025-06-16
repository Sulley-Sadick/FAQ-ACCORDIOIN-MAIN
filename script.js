/* / Activate strict mode */
'use strict'

/* Selecting elements */
const plusIcons = document.querySelectorAll('#plus-icon')
const minusIcon = document.getElementById('minus-icon')
const paragraphs = document.querySelectorAll('.paragraph')

plusIcons.forEach((plusIcon) => {
    plusIcon.addEventListener('click', () => {
        if ((plusIcon.src = 'assets/images/icon-plus.svg')) {
            plusIcon.src = 'assets/images/icon-minus.svg'
        } else {
            plusIcon.src = 'assets/images/icon-plus.svg'
        }
        for (const paragraph of paragraphs) {
            paragraph.style.display = 'block'
        }
    })
})
