const axios = require('axios');


const getPlace = async (adr) => {

  const encodeUrl = encodeURI(adr);
  
  const instance = axios.create({
    baseUrl: '',
    headers: {
      'X-RapidAPI-Key': '26a3044659msh17c25865fc99517p1f67f7jsn6fe82c2df213'
    }
  })
  
  const response = await instance.get(`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`)
  const data = response.data.Results;

  if (data.length === 0) throw new Error(`No results for ${adr}`)

  const {name: address, lat, lon: lng} = data[0];

  return {
    address,
    lat,
    lng
  }
}

module.exports = {
  getPlace
}
