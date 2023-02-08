

// Make the pop and shift buttons work as well
const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popButton = document.getElementById("pop-btn")
const shiftButton = document.getElementById("shift-btn")

function renderEmojis() {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

renderEmojis()

pushBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

unshiftBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})



popButton.addEventListener('click', ()=>{
    myEmojis.pop()
    renderEmojis()
})

shiftButton.addEventListener('click', ()=>{
    myEmojis.shift()
    renderEmojis()
})


// const myEmojis = ["💻", "🤩", "🫂"]

// const emojiContainer = document.getElementById("emojiContainer")
// const button = document.getElementById("push-btn")
// const unshifButton = document.getElementById("unshift-btn")
// const input = document.querySelector("#emoji-input")
// const popButton = document.getElementById("pop-btn")
// const shiftButton = document.getElementById("shift-btn")


//  function render(){
//      emojiContainer.innerHTML = ""
//     for (let i = 0; i < myEmojis.length; i ++){
//         const emojis =  document.createElement("span")
//         emojis.textContent = myEmojis[i]
//         emojiContainer.appendChild(emojis)
//      }
//    }

//  button.addEventListener('click', (e)=>{
//     if(input.value){
//         myEmojis.push(input.value)
//         input.value = ""
//         render()
//   }   
//  })

//  unshifButton.addEventListener('click', function(e){
//     if(input.value){
//         myEmojis.unshift(input.value)
//         input.value = ""
//         render()
//   }   
//  })

// popButton.addEventListener('click', ()=>{

// })

// shiftButton.addEventListener('click', ()=>{

// })