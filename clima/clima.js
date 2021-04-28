const axios = require('axios');

const getClima = async(lat, lgn) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lgn}&units=metric&appid=<API_KEY_openweather>`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}