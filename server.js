
const express = require('express');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
var path = require('path');
var formidable = require('express-formidable');
var fs = require('fs');
const app = express();

var dbUrl = "mongodb:/\/localhost/hernan"; 


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static(__dirname + '/public'));

app.use(formidable({
  multiples: true // req.files to be arrays of files 
}));


/*app.set('views', './views');

app.set('view engine', 'pug');

app.get("*", (req, res) => {
	res.render("index");
});

*/


var arr = [];
app.post('/upload', (req, res) => {	
	req.files.fotoInput.map((foto) => {
		arr.push(foto.name);
		fs.rename(foto.path, __dirname + '/public/img/' + foto.name);
	});
});


mongodb.MongoClient.connect(dbUrl, (err, db) => {
	if(err)
	{
			console.log("No se conecto a al BBDD " + err);
	}	
	else
	{
		app.get('/api/propiedades', (req, res) => {
			
			db.collection('propiedades').find({}).toArray((err, propiedades) => {
				res.json({ propiedades });
			});
		});

		app.get('/api/propiedad/:_id', (req, res) => {
			db.collection('propiedades').findOne({ _id: new mongodb.ObjectId(req.params.id) }, (err, propiedad) => {
				res.json({ propiedad });
			});

		});

		app.post('/api/propiedades', (req, res) => {
			var fotos = arr;
			const { titulo, precio, descripcion } = req.body;

			db.collection('propiedades').insert({ titulo, precio, descripcion, fotos }, 
				(err, result) => { res.json({ propiedades: result.ops[0] })
			});
		});
	}

	app.listen(3000, function(){
		console.log("Server iniciado en puerto 3000");
	});			
});


