const opt = {
  base: {
    demand: true,
    alias: 'b'
  },
  limit: {
    default: 10,
    alias: 'l'
  }
}

const argv = require('yargs')
              .command('list', 'Print numbers on console', opt)
              .command('create', 'Print numbers on console', opt)
              .help()
              .argv;

module.exports = {
  argv
}

