const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
  params: {
    aggregateHours: '24',
    location: 'Tulancingo,HGO,MX',
    contentType: 'json',
    unitGroup: 'uk',
    shortColumnNames: '0'
  },
  headers: {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_X_RapidAPI_Key,
    'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
  }
};

const weaterData = axios.request(options).then(function (response) {
  return response.data.locations["Tulancingo,HGO,MX"].currentConditions;
}).catch(function (error) {
  console.error(error);
});

export default weaterData