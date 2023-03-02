const button1 = document.querySelector('#dontPress1')
const button2 = document.querySelector('#dontPress2')
const button3 = document.querySelector('#dontPress3')
const button4 = document.querySelector('#dontPress4')
const button5 = document.querySelector('#dontPress5')
const button6 = document.querySelector('#dontPress6')
const messageContainer = document.querySelector('#messageContainer')



const warning1 = evt => {
    button1.style.visibility = 'hidden';
    button2.style.visibility = 'visible';

    axios.get('/warning')
    .then(response =>{
        createList(response.data)
    }).catch(err => console.log(err))
}

const warning2 = evt => {
    button2.style.visibility = 'hidden';
    button3.style.visibility = 'visible';

    axios.get('/warnin2')
    .then(response =>{
        createList(response.data)
    }).catch(err => console.log(err))
}

const warning3 = evt => {
    button3.style.visibility = 'hidden';
    button4.style.visibility = 'visible';

    axios.get('/warnin3')
    .then(response =>{
        createList(response.data)
    }).catch(err => console.log(err))
}

const warning4 = evt => {
    button4.style.visibility = 'hidden';
    button5.style.visibility = 'visible';

    axios.get('/warnin4')
    .then(response =>{
        createList(response.data)
    }).catch(err => console.log(err))
}

const warning5 = evt => {
    button5.style.visibility = 'hidden';
    button6.style.visibility = 'visible';

    axios.get('/warnin5')
    .then(response =>{
        createList(response.data)
    }).catch(err => console.log(err))
}

const warning6 = evt => {
    button6.style.visibility = 'hidden';
    
    axios.get('/warnin6')
    .then(response =>{
        createList(response.data)
    }).catch(err => console.log(err))
}

const createList = (str) => {
    messageContainer.innerHTML = ''
    const li = document.createElement('li')
    li.innerHTML = str
    messageContainer.appendChild(li)
    
}

button1.addEventListener('click', warning1)
button2.addEventListener('click', warning2)
button3.addEventListener('click', warning3)
button4.addEventListener('click', warning4)
button5.addEventListener('click', warning5)
button6.addEventListener('click', warning6)