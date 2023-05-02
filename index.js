

const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 6001;


app.use(cors());
const datas = require('./Data.json')
app.get('/', (req, res) =>{
    res.send('Server is running')
});


app.get('/datas',(req, res)=>{
    res.send(datas)
})

app.get('/recipes/:id', (req,res)=>{
        const id = req.params.id;
        const singleData = datas.find(d => d.id == id)
        res.send(singleData)
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})