
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

emotionRadios.addEventListener("cahnge", highlightcheckedOption)

function highlightcheckedOption(e){
 const allitem = document.getElementsByClassName('radio')
for (let item of allitem){
    item.classList.remove('highlight')
}

    document.getElementById(e.target.id).perantElement.classList.add('highlight')
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



