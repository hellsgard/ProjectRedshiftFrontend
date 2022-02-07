// Import in chai
const {expect} = require('chai');
const chai = require ('chai');
const chaiHttp = require('chai-http');
const request = require('request');

chai.use(chaiHttp);

it('Main page content', function(done) {
    request('http://localhost:8080/queryPerson/person' , function(error, response, body) {
        expect(body).to.equal('');
        done();
    });
});