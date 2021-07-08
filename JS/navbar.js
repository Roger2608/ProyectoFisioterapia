
addEventListener('DOMContentLoaded', () => {
        const boton = document.querySelector('.boton')
        if (boton) {
            boton.addEventListener('click', () => {
                const menu = document.querySelector('.enlaces')
                menu.classList.toggle('show')
            })
        }
})
