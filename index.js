const express = require('express');
const app = express();
const cors = require('cors')
const port =process.env.PORT || 8000 ;
app.use(cors())

const datas = require('./Data/data.json')

app.get('/', (req, res) => {
    res.send('Hello eveyone');
})
app.get('/datas',(req, res)=>{
    res.send(datas)
})

app.get('/recipes/:id', (req,res)=>{
    const id = req.params.id;
    const singleData = datas.find(d => d.id == id)
    res.send(singleData)
})


app.get('/data', (req, res)=>{
   res.send('Hi everuone')
})



app.listen(port, ()=>{
console.log(`Server is running in port ${port}`)
})
