const argv = require('yargs')
              .options({
                address: {
                  alias: 'd',
                  desc: 'Addres of city to get weather'
                }
              })