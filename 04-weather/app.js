const argv = require('yargs')
              .options({
                address: {
                  alias: 'd',
                  desc: 'Addres of city to get weather'
                }
              })
              .argv;
const place = require('./place');
const weather = require('./weather');





const getInfo = async (addr) => {
  try {
    const coords = await place.getPlace(addr)

    const temp = await weather.getWeather(coords.lat, coords.lng)

    return `The temperature in ${coords.address} is ${temp}`
  } catch (error) {
    console.log(error)
  }
}

getInfo(argv.address)
  .then(console.log)
  .catch(console.log)