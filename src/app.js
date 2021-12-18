const express = require('express')
const { fizzbuzz } = require('./fizzbuzz')
const checkInput = require('./middleware')

const app = express();

app.get('/fizzbuzz/:number', checkInput, (req, res) => {
    const response = fizzbuzz(parseInt(req.params.number))
    res.json({ result: response })
})

module.exports = app;