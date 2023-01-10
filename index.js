const myEmojis = ["o", "p", "o"]

const emojiContainer = document.getElementById("emojiContainer")

for (let i = 0; i < myEmojis.length; i ++){
    const emojis = document.createElement("span")
    emojis.textContent = myEmojis[i]
    emojiContainer.appendChild(emojis)
    
}

// console.log(div)

