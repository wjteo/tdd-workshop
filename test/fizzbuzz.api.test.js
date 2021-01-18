const request = require('supertest')
const app = require('../src/app')
const { closeJestMongoose } = require('./global/jestMongoose')
const checkInput = require('./middleware')
jest.mock('..//////////')
describe('GET /fizzbuzz', () => {
    it('should throw an exception if input is null', () => {
         expect(checkInput).toHaveBeenCalledWithr()
    })
})