const middleware = require('../src/middleware');
const express = require('express')
const request = require('supertest')


describe('', () => {
    it('should', async() => {
        const app = express();
        app.get('/:number', middleware, (req, res) => {
            res.send();
        })
        const response = await request(app).get('/hello');
        expect(response.status).toEqual(400);
    })
})