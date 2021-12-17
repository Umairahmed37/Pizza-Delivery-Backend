const express = require('express')
const connection=require('./connect')
const app = express()
// const cors=require('cors')
 
connection();
 
 
app.get('/', (req, res) => res.send('Hello World!'))


const port = process.env.PORT || 5000
app.listen( port , () => console.log(`Example app listening on port ${port}!`))