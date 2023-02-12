setTimeout(() => {
    console.log("Modal Opened")
}, 1500);


revealBtn.addEventListener('click', function(){
    answer.style.display = 'block'
    revealBtn.style.display ='none'
    question.style.background = '#68e1fd'
    question.style.color = '#1434A4'
    
    
})