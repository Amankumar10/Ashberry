const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')
connectToMongo();
const app = express()
const port = 4000


app.use(cors())
app.use(express.json())

//Available Routes
app.use('/api/auth',require('./routes/auth')) 
app.use('/api/notes',require('./routes/notes')) 

app.get('/',function(req,res){res.send('welcome to the server')})

app.listen(port, () => {
  console.log(`ashberry backend listening at http://localhost:${port}`)
})
