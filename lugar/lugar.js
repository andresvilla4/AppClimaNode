const axios = require('axios');

const getLugarLatLgn = async(direccion) => {

    let encodeUrl = encodeURI(direccion);
    const APIKEY = 'pk.eyJ1IjoiYW5kcmVzdmlsbGFjb2IiLCJhIjoiY2tvMWoxeXh5MGx4YTJwcDlxM3pvNnJhdSJ9.YnJMGgHCa1yE4wmzD6ZvBg';

    let resp = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeUrl}.json?access_token=${APIKEY}`)

    if (resp.data.status === "ZERO_RESULTS") {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    let location = resp.data.features[0].geometry.coordinates;
    let coors = resp.data.features[0].geometry.coordinates;

    return {
        direccion: resp.data.features[0].place_name,
        lat: coors[1],
        lgn: coors[0]
    }
}

module.exports = {
    getLugarLatLgn
}