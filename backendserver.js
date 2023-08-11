const express = require('express') 
const app = express() 
const cors = require('cors')
const connectToDb = require('./Database/db')
connectToDb()
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use('/', require('./Routes/api/router'))
app.use(express.json())
app.get('/sg', (req, res) => {
    res.send('<h1>Welcome</h1>')
})
app.listen(5000, () => console.log('Server listening on port 5000'))