const readline = require("readline")
const { stdin: input, stdout: output } = require('node:process')
const rl = readline.createInterface({ input, output })
const question = question => new Promise((resolve, reject) => rl.question(question, answer => resolve(answer)))

async function main() {
    console.log("-----")
    var anoDeNascimento = await question("quando o sinho nasceu jovi? ")
    anoDeNascimento = parseInt(anoDeNascimento) 
    console.log("ah jovinho? entao tu tem ", 2022-anoDeNascimento , " anos")
    process.exit()
}

main()


// -----
// qual é o seu nome? salandroum
// e seu sobrenome? silenies
// o nome que voce digitou foi: salandroum silenies