const express = require('express');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
const fs = require('fs');


const app = express();

var dbUrl = "mongodb://localhost/hernan"; 


app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));



mongodb.MongoClient.connect(dbUrl, (err, db) => {
	if(err)
	{
		console.log(err)
	}
	else
	{
		app.get('/api/propiedades', (req, res) => {
			db.collection('propiedades').find({}).toArray((err, propiedades) => {
				res.json({ propiedades });
			});
		});

		app.get('/api/propiedad/:_id', (req, res) => {
			db.collection('propiedades').findOne({ _id: new mongodb.ObjectId(req.params._id) }, (err, propiedad) => {
				res.json({ propiedad });
			});

		});

		app.post('/api/propiedades', (req, res) => {

			const { titulo, precio, descripcion } = req.body;
			
			db.collection('propiedades').insert({ titulo, precio, descripcion }, 
				(err, result) => { res.json({ propiedades: result.ops[0] })
			});
		});
	}			
});


app.listen(3000, function(){
	console.log("Server iniciado en puerto 3000");
});