module.exports = (req, res, next) => {
    console.log('hello', req.params.number)
    if (isNaN(req.params.number)) {
        res.status(400).send()
    }
    next()
}