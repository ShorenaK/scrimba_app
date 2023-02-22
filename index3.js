import { catsData } from './data.js'
// function getEmotionsArray(cats){
//     const emotionArray = []
//     for(let i = 0; i < cats.length; i ++){
//         for(let j = 0; j < cats[i].emotionTags.length; j ++){
//             emotionArray.push(cats[i].emotionTags[j])
//         }
//     }
//     console.log(emotionArray)
// }
// getEmotionsArray(catsData)
const emotionRadios = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-image-btn')
const gifsOnlyOption = document.getElementById('gifs-only-option')
const memeModalInner = document.getElementById('meme-modal-inner')
const memeModal = document.getElementById('meme-modal')




emotionRadios.addEventListener('change', highlightCheckedOption)

getImageBtn.addEventListener('click', renderCat)

function highlightCheckedOption(e){
    const radios = document.getElementsByClassName('radio')
    for (let radio of radios){
        radio.classList.remove('highlight')
    }
    // remove all instances of the highlight class
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

function getMatchingCatsArray(){
   

    if(document.querySelector('input[type="radio"]:checked')){
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
        const isGif = gifsOnlyOption.checked

       const matchingCatsArray = catsData.filter(function (cat){
        if(isGif){
            return cat.emotionTags.includes(selectedEmotion) && cat.isGif
        }else{ 
            return cat.emotionTags.includes(selectedEmotion)
        }
        })
          return matchingCatsArray
    }
}

function getSingleCatObject(){
    const catsArray = getMatchingCatsArray()
    if(catsArray.length === 1){
        return catsArray[0]
    }else{
        const randomNumber = Math.floor(Math.random() * catsArray.length)
         return catsArray[randomNumber]  
    }
    
}

function renderCat(){
const catObject =  getSingleCatObject()

memeModalInner.innerHTML =  `<img 
class="cat-img" 
src="./images/CAT IMAGE"
alt="CAT ALT TEXT"
>`
memeModal.style.display = 'flex'
}



function getEmotionsArray(cats){
    const emotionsArray = []
    for (let cat of cats){
        for (let emotion of cat.emotionTags){
            if(!emotionsArray.includes(emotion)){   
            emotionsArray.push(emotion)
        }
      }
    }  
    return emotionsArray
}
// for ( let character of characters){
//     for (let power of character.powers){   
//         console.log(power)
//     }
// }
function renderEmotionsRadios(cats){
    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    
    for (let emotion of emotions){
        radioItems += `<div class="radio">
        <label for="${emotion}">${emotion}</label>
        <input
            type="radio"
            id="${emotion}"
            value="${emotion}"
            name="emotions"
            >
    </div>
    `
    }
        emotionRadios.innerHTML = radioItems
}
renderEmotionsRadios(catsData)



