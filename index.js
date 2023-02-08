const myEmojis = ["💻", "🤩", "🫂"]

const emojiContainer = document.getElementById("emojiContainer")

 let button = document.getElementById("push-btn")
 
 button.addEventListener('click', (e)=>{
    const input = document.querySelector("#emoji-input")
    if(input.value){
        myEmojis.push(input.value)
        input.value = ""
        emojiContainer.innerHTML = ""
        render()
  }   
 })
function render(){
 for (let i = 0; i < myEmojis.length; i ++){
    const emojis =  document.createElement("span")
     emojis.textContent = myEmojis[i]
     emojiContainer.appendChild(emojis)

  }
}
