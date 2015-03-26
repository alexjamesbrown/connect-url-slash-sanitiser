module.exports = function(opts) {

    opts = opts || {
        removeTrailing: true
    }

    return function(req, res, next) {
        if (req.url.indexOf('//') > 0) {

            var newPath = req.path.replace(/\/\//g, '/')

            if(opts.removeTrailing)
            	newPath = newPath.replace(/\/$/, "");

            return res.redirect(301, req.url.replace(req.path, newPath))
        }

        return next()
    };
};
