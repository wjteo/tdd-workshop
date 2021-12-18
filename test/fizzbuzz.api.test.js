const request = require('supertest');
const app = require('../src/app')

describe('GET /fizzbuzz', () => {
    it('should return 200', async() => {
        const response = await request(app).get('/fizzbuzz/12');
        expect(response.status).toEqual(200);
        expect(response.body).toEqual({ result: 'lazy' })
    })

    it('should return 400 if input is not a number', async() => {
        const response = await request(app).get('/fizzbuzz/hello')
        expect(response.status).toEqual(400)
    })
})