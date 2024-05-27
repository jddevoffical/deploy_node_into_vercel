const express = require('express')
const app = express()

app.get('/home', (req, res) => {
    res.send('Homepage')
})

app.listen(8080, () => {
    console.log(`The is app listening port 8080`)
})