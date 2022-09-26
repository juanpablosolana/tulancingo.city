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

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
