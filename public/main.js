const button1 = document.querySelector('#dontPress1')
const messageContainer = document.querySelector('#messageContainer')
const BC1 = document.querySelector('#buttonContainer1')


const warning1 = evt => {
    button1.style.visibility = 'hidden';
    const button2 = document.createElement('button')
    button2.innerHTML = 'Dont do it!';
    BC1.appendChild(button2)

    axios.get('/warning')
    .then(response =>{
        createList(response.data)
    }).catch(err => console.log(err))
}

const createList = (str) => {
    const li = document.createElement('li')
    li.innerHTML = str
    messageContainer.appendChild(li)
    
}

button1.addEventListener('click', warning1)