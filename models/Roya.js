var mongoose = require('mongoose');

var RoyaSchema = new mongoose.Schema({
	advMode:Boolean,
	bandolas:Boolean,
	resolved:Boolean,
	user:String,
	plantas:[],
	unidad:{},
	incidencia: Number,
	inideanciaPromedioPlanta: Number,
	severidadPromedio: Number
},
{
    timestamps: true
});

mongoose.model('Roya', RoyaSchema);

