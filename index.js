module.exports = function(opts) {

	return function(req, res, next){
		if(req.url.indexOf('//')>0){

			var newPath = req.path.replace(/\/\//g, '/')

			return res.redirect(301, req.url.replace(req.path, newPath))
		}

		return next()
	};
};