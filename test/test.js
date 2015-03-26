var urlSlashSanitiser = require('../');
var httpMocks = require('node-mocks-http');
var sinon = require('sinon');
var assert = require('assert');

describe('urlSlashSanitiser()', function() {

    describe('with default options', function() {
        var _urlSlashSanitiser;
        
        beforeEach(function() {
            _urlSlashSanitiser = urlSlashSanitiser();
        })

        it('redirects to url without double slashes', function() {

            var request = httpMocks.createRequest({
                method: 'GET',
                url: 'http://localhost:3000/a/url/with//double//slashes'
            });

            var response = {
                redirect: sinon.spy()
            };

            _urlSlashSanitiser(request, response);

            assert(response.redirect.calledWith(301, 'http://localhost:3000/a/url/with/double/slashes'))
        })

        it('redirects to url without trailing slash', function() {

            var request = httpMocks.createRequest({
                method: 'GET',
                url: 'http://localhost:3000/a/url/with//double//slashes/and/trailing/'
            });

            var response = {
                redirect: sinon.spy()
            };

            _urlSlashSanitiser(request, response);

            assert(response.redirect.calledWith(301, 'http://localhost:3000/a/url/with/double/slashes/and/trailing'))
        })
    })
})
