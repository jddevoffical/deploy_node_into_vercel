const express = require('express')
const app = express()

app.get('/home', (req, res) => {
    res.send('Homepage')
})

app.get('/', (req, res) => {
    res.json({message: "welcome to node js"})
})

app.listen(8080, () => {
    console.log(`The is app listening port 8080`)
})