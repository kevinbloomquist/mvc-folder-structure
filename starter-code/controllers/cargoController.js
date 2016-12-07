
//Set up DB -- look at those models
var db = require('../models');

//Cargo form
//Add new cargo
var cargoCreate = function(req, res) { //and look at that controller
	console.log(db.Cargo);
	db.Cargo.create({description: req.body.description, title: req.body.title}, function(error, cargo) {
		res.render('cargoShow', {cargo: cargo});//from arguments in the function above cargo
	});
};
var cargoNew = function(req, res) { //look at that controller
res.render('cargoNew'); //has to ba above routers


};



module.exports.cargoCreate = cargoCreate;
module.exports.cargoNew = cargoNew;