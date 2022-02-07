const expect  = require('chai').expect;
const request = require('request');

it('Main page content', function(done) {
    request('http://localhost:8080/queryPerson/person' , function(error, response, body) {
        expect(body).to.equal('');
        done();
    });
});