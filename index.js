const express = require('express')
const cors = require('cors')
const app = express()

const classes = require('./data/class.json')

app.use(cors())
const port =process.env.port || 5000

app.get('/', (req, res)=>{
    res.send('server running')
})

app.get('/classes', (req, res)=>{
    res.send(classes);
})

app.get('/classes/:id', (req, res)=>{
    const id = parseInt(req.params.id)
    const selected = classes.find(c => c.id === id)
    res.send(selected)
})

app.listen(port, ()=>{
    console.log('server is running on :', port)
})