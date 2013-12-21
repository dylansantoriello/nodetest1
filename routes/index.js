
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Hello ya goofy nerd' });
};

exports.heybitch = function(req, res){
	res.render('heybitch', { title: 'Hey Bitch!'});
};