const readline = require("readline")
const { stdin: input, stdout: output } = require('node:process')
const rl = readline.createInterface({ input, output })
const question = question => new Promise((resolve, reject) => rl.question(question, answer => resolve(answer)))

async function main() {
    console.log("-----")
    var cabras = await question("o muleque! me ajuda a sabe quanta cabra tenhu? ")
    var cachorros = await question("o muleque! me ajuda a sabe quanto cachorro/cadela tenhu? ")
    var gatinhos = await question ("o muleque! pela terceira vez quanto gatinhos fofos eu tenho? ")
    cabras = parseInt(cabras)
    gatinhos =parseInt(gatinhos)
    cachorros = parseInt(cachorros)
    console.log("ah eu tenhu ",cabras+cachorros+gatinhos,"bichos" )
    process.exit()
}

main()


// -----
// o muleque! me ajuda a sabe quanta cabra tenhu? 22
// o muleque! me ajuda a sabe quanto cachorro/cadela tenhu? 19
// ah eu tenhu  41 bichos
// gitpod /workspace/deleteme (master) $ 