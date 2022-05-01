const readline = require("readline")
const { stdin: input, stdout: output } = require('node:process')
const rl = readline.createInterface({ input, output })
// @ts-ignore
const question = question => new Promise((resolve, reject) => rl.question(question, answer => resolve(answer)))

async function main() {
    console.log("-----")
    var nome = await question("qual é o seu nome? ")
    var sobrenome = await question("e seu sobrenome? ")
    console.log("o nome que voce digitou foi:", nome, sobrenome)
    process.exit()
}

main()


// -----
// qual é o seu nome? salandroum
// e seu sobrenome? silenies
// o nome que voce digitou foi: salandroum silenies