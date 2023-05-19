const { createApp } = Vue;

createApp({
    data() {
        return {
            images: [
                {
                    image: 'img/01.webp',
                    title: "Marvel's Spiderman Miles Morale",
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                },
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                },
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                },
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                },
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
                }
            ],
        }
    },
    methods: {
        clickDown() {

        }
    }
}).mount('#app')



const selectSlider = document.querySelector('.slider');
const selectSideSlider = document.querySelector('.side-slider');




// // Inserisco il blocco div e img sul DOM
// images.forEach((element) => {

//     selectSlider.innerHTML +=
//         `<div class="item">
//             <img src="${element.images.image}"></img>
//             <h2>${element.title}</h2>
//             <p>${element.text}</p>
//         </div>`;


//     selectSideSlider.innerHTML += `<div class="card"><img src="${element.image}"></img></div>`;


// });



// // Assegna classe active alla prima immagine
// let classActive = 0;
// const selectItemSlider = document.querySelectorAll('.item');
// selectItemSlider[classActive].classList.add('active');
// const selectCards = document.querySelectorAll('.card');
// selectCards[classActive].classList.add('border');

// // Cambia immagine al click
// const selectButtonDown = document.getElementById('down');

// // Down
// selectButtonDown.addEventListener('click',
//     function () {

//         selectItemSlider[classActive].classList.remove('active');
//         selectCards[classActive].classList.remove('border');
//         classActive++

//         if (classActive === selectItemSlider.length) {
//             classActive = 0;
//         }
//         selectItemSlider[classActive].classList.add('active');
//         selectCards[classActive].classList.add('border');

//     }
// )

// // Up
// const selectButtonUp = document.getElementById("up");
// selectButtonUp.addEventListener("click",
//     function () {

//         selectItemSlider[classActive].classList.remove('active');
//         selectCards[classActive].classList.remove('border');

//         if (classActive === 0) {
//             classActive = selectItemSlider.length;
//         }

//         classActive--

//         selectItemSlider[classActive].classList.add('active');
//         selectCards[classActive].classList.add('border');

//     }
// );
