const fbModule = require('../src/fizzbuzz')

describe('fizzbuzz', () => {
    afterAll(() => {
        jest.restoreAllMocks();
    })

    it.each `
    input| expected
    ${3} | ${'lazy'}
    ${6} | ${'lazy'}
    ${5} | ${'chiru'}
    ${10} | ${'chiru'}
    ${15} | ${'lazy chiru'}
    ${30} | ${'lazy chiru'}
    ` ('should return $input if input is $expected', ({ input, expected }) => {
        // const mockValidate = jest.spyOn(fbModule, 'validate')
        const result = fbModule.fizzbuzz(input)
        expect(result).toEqual(expected)
            // expect(mockValidate).toHaveBeenCalledWith(input)
    })
})

xdescribe('validate', () => {
    it('should throw error if input is NaN', () => {
        try {
            expect.assertions(1)
            const result = validate('hello world')
        } catch (error) {
            expect(error).toBeDefined();
        }
    })
})