const { model } = require('mongoose');
const { initJestMongoose, closeJestMongoose } = require('./global/jestMongoose')


describe('jestMongoose boilerplate', () => {
    beforeAll(async() => {
        await initJestMongoose('testDB');
    })

    afterAll(async() => {
        await closeJestMongoose();
    })


    test('jestMongoose is working', () => {
        expect(1).toEqual(1);
    })
})