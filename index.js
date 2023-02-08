const myEmojis = ["💻", "🤩", "🫂"]

const emojiContainer = document.getElementById("emojiContainer")
const button = document.getElementById("push-btn")
const unshifButton = document.getElementById("unshift-btn")
const input = document.querySelector("#emoji-input")


 function render(){
     emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i ++){
        const emojis =  document.createElement("span")
        emojis.textContent = myEmojis[i]
        emojiContainer.appendChild(emojis)
     }
   }

 button.addEventListener('click', (e)=>{
    if(input.value){
        myEmojis.push(input.value)
        input.value = ""
     
        render()
  }   
 })

 unshifButton.addEventListener('click', function(e){
    if(input.value){
        myEmojis.unshift(input.value)
        input.value = ""
        render()
  }   
 })

