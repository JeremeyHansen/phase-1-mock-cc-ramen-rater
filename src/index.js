// write your code here

const menu = document.getElementById('ramen_menu');

const ramanUrl = 'http://localhost:3000/ramens'

document.addEventListener('DOMContentLoaded', (e)=>{ 
    e.preventDefault()
    // const menu = document.getElementById('raman-menu')

addImages()
})        

function addImages(){
return fetch(ramanUrl)
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(image => image.forEach(image => {
        const imageCard = document.createElement('div');
        const actualImage = document.createElement('img')
        actualImage.src = `${image.image}`;    
        menu.appendChild(imageCard).appendChild(actualImage)
    }))
}

