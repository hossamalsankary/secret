const express = require('express')
require("dotenv").config();
const app = express()
const port = 3000

app.get('/', (req, res) =>{
    const {link} = req.query; 
    res.redirect(link);
})
app.get('/link', (req, res) =>{
    const {link} = req.query; 
    res.redirect(link);
})
app.listen(process.env.PORT, () => console.log(`Example app listening on port ${port}!`))