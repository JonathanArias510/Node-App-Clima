const axios = require('axios');

const yargs = require('./config/yargs').yargs;

const { getLugarLatLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');

// console.log(yargs);


let getInfo = async(direccion) => {

	let coordenadas = await getLugarLatLng(direccion);

	let temperatura = await getClima(coordenadas.lat, coordenadas.lng)

	return `La temperatura en ${ coordenadas.ciudadPais } es ${ temperatura.temp }`;
}

getInfo(yargs.direccion)
	.then( mess => console.log(mess))
	.catch( err => console.log(err));
