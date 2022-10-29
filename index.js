let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay')
let closebtn = document.querySelector('.close-modal')

let openbtn = document.querySelector('.show-modal')


openbtn.addEventListener('click', function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
})
