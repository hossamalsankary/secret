const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>{
    const {link} = req.query; 
    res.redirect(link);
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))