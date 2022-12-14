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

// YOU CAN ALWAYS USE THE TWO METHOD
// BUT I PREFER  TO USE THIS >>>

let modals = document.querySelector('.modal');
let overlays = document.querySelector('.overlay')
let closebtns = document.querySelector('.close-modal')
let openbtns = document.querySelector('.show-modal')


let openModals = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

let closemodals = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


openbtns.addEventListener('click' , openModal)
overlays.addEventListener('click' , closemodal)
closebtns.addEventListener('click' , closemodal)

//USING THE ESCAPE KEY TO CLOSE THE MODAL
document.addEventListener('keydown' , function(e){
    console.log(e.key)

    if(e.key === 'Escape' &&  !modal.classList.contains('hidden')){
            closemodal();
        }
    }
)