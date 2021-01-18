const express = require('express')
const fizzbuzz = require('./fizzbuzz')
const checkInput = require('./middleware')

const app = express()
app.get('/fizzbuzz', checkInput, (req, res) => {
    const { query } = req
    res.status(200).send(fizzbuzz(parseInt(query.n)))
})

module.exports = app