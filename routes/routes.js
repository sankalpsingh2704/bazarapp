
module.exports = function(app){

	app.get('/',function(req,res){
		res.end('welcome to express');
	});

}