const fizzbuzz = (n) => {
    // fbModule.validate(n)

    if (n % 3 == 0 && n % 5 == 0) {
        return 'lazy chiru'
    }

    if (n % 3 == 0) {
        return 'lazy'
    }

    if (n % 5 == 0) {
        return 'chiru'
    }
}

const validate = (n) => {
    if (isNaN(n)) {
        throw "Not a number"
    }
}

const fbModule = {
    fizzbuzz,
    // validate
}

module.exports = fbModule