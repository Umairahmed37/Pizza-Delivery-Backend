const express = require('express')
const connection = require('./connect')
const app = express()
const dotenv = require('dotenv')


// this will update the process.env with environment variables in .env file
dotenv.config();
const cors = require('cors')
connection();

 app.use(express.json())

const pizzaroute = require('./routes/pizzaroute')
const userroute = require('./routes/userroute')
const orderroute = require('./routes/orderRoute')

app.use('/api', pizzaroute)
app.use('/api/user', userroute)
app.use('/api/orders', orderroute)
 



app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))