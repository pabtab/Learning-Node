const { createFile } = require('./Multiply/multily')

const argv = process.argv;
const param = argv[2];

const base = param.split('=')[1]


createFile(base)
  .then(file => console.log(`File created: ${file}`))
  .catch(e => console.log(e))
