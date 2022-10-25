const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
const port =process.env.port || 5000

app.get('/', (req, res)=>{
    res.send('server running')
})

app.listen(port, ()=>{
    console.log('server is running', port)
})