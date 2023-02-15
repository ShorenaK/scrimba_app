
import {catsData} from './data.js'
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
const emotionsArray = []
function getEmotionsArray(cats){
    for (let cat of cats){
        for (emotion of cat.emotionTags){
            emotionsArray.push(emotion)
        }
    }  
    return emotionsArray
}
const emotionRadios = document.getElementById('emotion-radios')

// for ( let character of characters){
//     for (let power of character.powers){   
//         console.log(power)
//     }
// }

function renderEmotionsRadios(cats){
    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    
    for (let emotion of emotions){
        radioItems += `<p>{emotion}<p/>`
    }
        emotionRadios.innerHTML = radioItems
}
renderEmotionsRadios(catsData)