const fizzbuzz = require('../src/fizzbuzz')

describe('fizzbuzz', () => {
    it.each([
        [3, 'lazy'],
        [10, 'chiru'],
        [50, 'chiru'],
        [15, 'lazy chiru'],
        [45, 'lazy chiru'],
        [4, ''],
        [47, ''],
    ])('should return correct string given n ', (n, expected) => {
        expect(fizzbuzz(n)).toEqual(expected)
    })
    xit('throws error with invalid input', () => {
        expect.assertions(1);
        // let assertionPassed = false
        try {
            fizzbuzz('random string')
        } catch(err) {
            // if (err.message === 'Invalid input')
            // assertionPassed = true
            expect(err.message).toEqual('Invalid input')
        }
        // expect(assertionPassed).toEqual(true)
      });
})