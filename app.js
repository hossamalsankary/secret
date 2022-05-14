const express = require('express')
require("dotenv").config();
const app = express()
const port = 3000

app.get('/', (req, res) =>{
    const {link} = req.query; 
    res.redirect("https://neenors.com/100e91312e9b4355800/hosam");
})
app.get('/link', (req, res) =>{
    const {link} = req.query; 
    res.redirect("https://neenors.com/100e91312e9b4355800/hosam");
})
app.listen(process.env.PORT, () => console.log(`Example app listening on port ${port}!`))