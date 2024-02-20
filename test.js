const request = require('supertest');
const assert = require('assert');
const app = require('./index');

describe('POST /add', function() {
    it('responds with json', function(done) {
        request(app)
            .post('/add')
            .send({num1: 5, num2: 7})
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                assert.strictEqual(response.body.result, 12);
                done();
            });
    });
});