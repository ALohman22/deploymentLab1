const button = document.querySelector('button')

const alert = evt => {
    alert('Ducks!')
}

button.addEventListener('click', alert)