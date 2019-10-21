const argv = require('./config/yargs')
              .argv;


const { createFile, listNumbers } = require('./Multiply/multily');

//const argv2 = process.argv;
/* const param = argv[2]; */

console.log(argv)
const independentCmd = argv._[0]

switch (independentCmd) {
  case 'list':
    listNumbers(argv.base, argv.limit)
    break;
  
  case 'create':

    createFile(argv.base, argv.limit)
      .then(file => console.log(`File created: ${file}`.magenta))
      .catch(e => console.log(e))
    break;

  default:
    break;
}

