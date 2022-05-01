const readline = require("readline")
const { stdin: input, stdout: output } = require('node:process')
const rl = readline.createInterface({ input, output })
const question = question => new Promise((resolve, reject) => rl.question(question, answer => resolve(answer)))

async function main() {
    var palavra = await question ("menino! me ajuda a escrever essa palavra? ")
    console.log("a palavra que tu escreveu tem", palavra.length, "letras")
    process.exit()
}

main()