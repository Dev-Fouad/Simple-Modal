let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay')
let closebtn = document.querySelector('.close-modal')
let openbtn = document.querySelector('.show-modal')


let openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

let closemodal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


openbtn.addEventListener('click' , openModal)
overlay.addEventListener('click' , closemodal)
closebtn.addEventListener('click' , closemodal)
