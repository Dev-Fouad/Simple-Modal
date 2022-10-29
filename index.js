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

//OR

openbtn.addEventListener('click' , function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
})

closebtn.addEventListener('click' , function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})

overlay.addEventListener('click', function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})

//YOU CAN ALWAYS USE THE TWO METHOD
// BUT I PREFER  TO USE THIS >>>

// let modal = document.querySelector('.modal');
// let overlay = document.querySelector('.overlay')
// let closebtn = document.querySelector('.close-modal')
// let openbtn = document.querySelector('.show-modal')


// let openModal = function(){
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
// }

// let closemodal = function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// }


// openbtn.addEventListener('click' , openModal)
// overlay.addEventListener('click' , closemodal)
// closebtn.addEventListener('click' , closemodal)