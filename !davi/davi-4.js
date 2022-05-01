const readline = require("readline")
const { stdin: input, stdout: output } = require('node:process')
const rl = readline.createInterface({ input, output })
const question = question => new Promise((resolve, reject) => rl.question(question, answer => resolve(answer)))

async function main() {
    var vaquinhaLotericaDimDim = await question ("quantos de dim dim voce que que a vaquinha ganhe sinho?")
    var  vaquinhaLotericaIdade = await question ("e quanto zanos ela tem? ") 
    vaquinhaLotericaIdade = parseInt(vaquinhaLotericaIdade)
    vaquinhaLotericaDimDim = parseInt(vaquinhaLotericaDimDim)
    if (vaquinhaLotericaDimDim >= 1000 && vaquinhaLotericaIdade >= 16) {
        console.log ("a vaquinha ganho oooo a vaquinha ganho ooo")
    } else {
        console.log("bom...ainda nao e nada entao... a vaquinha perdeu uuuu")
    }
    process.exit()
}

main()