
const axios = require('axios');
const colors = require('colors/safe');

const getLugarLatLng = async(direction) => {

	let encodeUrl = encodeURI(direction);

	let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyCxxoxipRHlDDarjA-DNGBpz1qSEVst1EQ`)


	if (resp.data.status === "ZERO_RESULTS") {
		throw new Error(colors.red(`No Hay resultados que hagan match con la direccion: ${ direction }`));
	}

	let location = resp.data.results[0];
	let coordenadas = location.geometry.location;


	return {

		ciudadPais: location.formatted_address,
		lat: coordenadas.lat,
		lng: coordenadas.lng

	};

}


module.exports = {
	getLugarLatLng
};
