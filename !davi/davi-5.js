const readline = require("readline")
const { stdin: input, stdout: output } = require('node:process')
const rl = readline.createInterface({ input, output })
const question = question => new Promise((resolve, reject) => rl.question(question, answer => resolve(answer)))

async function main() {
    var namorado  = await question ("qual e o nome do namorado? ")
    var namorada = await question ("qual e o nome da namorada? ")
    if(namorado=="Daniel" && namorada=="Mikaela") {
        console.log("namorado de chapeu + namorada dirigindo +*meme do saxofone*")
    } else {
        console.log("bom eles sao estranhos pra mim hummmmm... ")
    } 
    process.exit()
}

main()