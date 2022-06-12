'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal')
console.log(btnOpenModal);

const openModal =function () {
    console.log('button clicked');
    modal.classList.remove('hidden');
     overlay.classList.remove('hidden')
 }
for (let i = 0; i < btnOpenModal.length; i++) {
   btnOpenModal[i].addEventListener('click', openModal)
}
// btnOpenModal[i].addEventListener('click', function () {
//    console.log('button clicked');
//    modal.classList.remove('hidden');
//    overlay.classList.remove('hidden')
// })

// function addup (n) {
//     let sum = 0
//     for (let i = 0; i <= n; i++) {
//         sum += i;
//     }
//     return sum
// }
// console.log(addup(10));
const closeModal =  function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden')
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    console.log(e.key);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
       closeModal()
    }
})