const colors = require('colors');

const yargs = require('yargs')
.options({
	direccion: {
		alias: 'd',
		desc: 'Direccion de la ciudad, par obtener el clima'.cyan,
		demand: true
	}
})
.help()
.argv;



module.exports = {
yargs
};
