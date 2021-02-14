const express = require('express')
const app = express()

app.get('/student_id', (req, res) => {
    res.send('NO_ONE')
})

module.exports = app
