import express from 'express';
var router = express.Router();
var Validator = require('validator');
var isEmpty = require('lodash/isEmpty');

function validateInput(data){
	var errors = {};

	if(Validator.isEmpty(data.email)){
		errors.email = "This field is required";		
	}

	if(!Validator.isEmail(data.email)) {
		errors.email = "Email is invalid";
	}

	if(Validator.isEmpty(data.password)){
		errors.password = "This field is required";		
	}

	if(Validator.isEmpty(data.passwordConfirmation)){
		errors.passwordConfirmation = "This field is required";		
	}

	if(!Validator.equals(data.password, data.passwordConfirmation)){
		errors.passwordConfirmation = "Los passwords deben coincidir";
	}

	return {
		errors,
		isValid: isEmpty(errors)
	}
}

router.post('/', (req, res) => {

	console.log(req.body);
	
	const { errors, isValid } = validateInput(req.body);
	
	if(!isValid){
		res.status(400).json(errors);
	}
});

module.exports = router;