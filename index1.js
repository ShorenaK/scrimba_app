setTimeout(() => {
    console.log("Modal Opened")
}, 1500);


revealBtn.addEventListener('click', function(){
    answer.style.display = 'block'
    revealBtn.style.display ='none'
    question.style.background = '#68e1fd'
    question.style.color = '#1434A4'
   
})

const modal = document.getElementById('modal')
const loginForm = document.getElementById('login')
const modalCloseBtn = document.getElementById('modal-close-btn')
 

loginForm.addEventListener("submit", function(e){
   e.preventDefault()
   console.log('submited')
})

setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})
