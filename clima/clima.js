const axios = require('axios');
const colors = require('colors/safe');

const getClima = async (lat, lng) => {

	let coordenadas = `lat=${ lat }&lon=${ lng }`

	let encodeUrl = encodeURI(coordenadas);

	let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?${encodeUrl}&units=metric&appid=a1cdabba98d22a38b0c3889b7b2c96ec`)

	if (resp.message === "Nothing to geocode") {
		throw new Error(colors.red(`Coordenadas: ${ coordenadas } Invalidas`));
	}
	
	let temp = resp.data.main.temp;
	return {
		temp: temp,
	};

}


module.exports = {
	getClima
};
