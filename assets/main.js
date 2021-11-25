// https://baconipsum.com/api/?type=meat-and-filler

void async function() {
    const x = await fetch("https://baconipsum.com/api/?type=meat-and-filler")
    const y = await x.json()
    console.log(y[0])
}()

const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, est soluta. Nihil, numquam repellat dolorum aliquam ipsum eius consequatur impedit mollitia distinctio ullam molestiae error quidem facilis praesentium harum provident."
const para = document.querySelector("main p")

let word = document.createElement("span")
word.className = "word"

for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
        para.appendChild(word)
        word = document.createElement("span")
        word.className = "word"
    }

    const letter = document.createElement("span")
    letter.className = "letter"
    letter.innerText = text[i]
    word.appendChild(letter)

}

para.appendChild(word)