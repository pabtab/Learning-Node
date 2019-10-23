
const axios = require('axios');

const appid = '225c606855395d1e580c2078623626c3'

const getWeather = async (lat, lng) => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${appid}`)

  return response.data.main.temp
}

module.exports = {
  getWeather
}