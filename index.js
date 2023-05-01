const express = require('express');
const cors = require('cors')
const app = express();
const port = 5005;
app.use(cors())

const datas = require('./Data/data.json')

app.get('/', (req, res) => {
    res.send('Hello everyone');
})
app.get('/datas',(req, res)=>{
    res.send(datas)
})


app.get('/data', (req, res)=>{
   res.send('Hi everuone')
})



app.listen(port, ()=>{
console.log(`my first server is running on ${port}`)
})
