const myEmojis = ["💻", "🤩", "🫂"]

const emojiContainer = document.getElementById("emojiContainer")
console.log(emojiContainer)

 for (let i = 0; i < myEmojis.length; i ++){
   const emojis =  document.createElement("span")
    emojis.textContent = myEmojis[i]
    emojiContainer.appendChild(emojis)
 }
