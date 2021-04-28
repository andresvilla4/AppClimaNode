const lugar = require('./lugar/lugar_2');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {
    let coors = await lugar.getLugarLatLgn(direccion);
    let temp = await clima.getClima(coors.lat, coors.lgn);
    return `El clima en ${coors.direccion} es de ${temp} °C`;
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log('Error en getInfo.'));

/*
lugar.getLugarLatLgn(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(e => console.log(e));

clima.getClima(9.9280694, -84.0907246)
    .then(temp => console.log(`La temperatura es: ${temp}`))
    .catch(e => console.log('Error con la temperatura', e));
    */