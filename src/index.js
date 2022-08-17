// write your code here

const menu = document.getElementById('ramen_menu');

const ramanUrl = 'http://localhost:3000/ramens'

document.addEventListener('DOMContentLoaded', (e)=>{ 
    e.preventDefault()
    // const menu = document.getElementById('raman-menu')

fetch(ramanUrl)
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(image => image.forEach(image => {
        const imageCard = document.createElement('img');
        imageCard.src = 'image.image';    
        menu.appendChild(imageCard)
    }))
})        

let form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    createNewRaman(e.target.value);
    form.reset();
})

function createNewRaman(raman){
    let newRam = document.createElement('div')
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let img = document.createElement('img')
    let p4 = document.createElement('p')
    let p5 = document.createElement('p')
}
// const configurationObject = {
//     method: "POST",
//     headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json'
//     },
//     body: JSON.stringify({

//     })
// }


///were so freaking close Jeremey look how far youve come. So we managedd to run through the images and display all 5 images, however we werent able to pull the image src from the data so the images displayed were nothing. So go back and figure out exactly how to pinpoint those. You spent 99% of your time on this lab trying to figure that out. Use better time management! Youre almost there though!