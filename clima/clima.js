const axios = require('axios');

const getClima = async(lat, lgn) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lgn}&units=metric&appid=0289cbc0f773e23f48de5ad1b9b7c961`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}