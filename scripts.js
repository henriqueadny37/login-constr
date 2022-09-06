const btn = document.getElementById('btn')

function toggleMenu(){
    const nave = document.getElementById('nave')
    nave.classList.toggle('active')
}
btn.addEventListener('click', toggleMenu)