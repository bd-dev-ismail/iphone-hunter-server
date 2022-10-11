const express = require('express');
const app = express();
const phones = require('./phone.json');
const port = 5000;

app.get('/', (req, res)=>{
    res.send('Say changes!! Iphone Hunder');
})

app.get('/phones', (req, res) =>{
    res.send(phones);
})

app.get('/phones/:id', (req ,res)=>{
    const id = parseInt(req.params.id);
    const phone = phones.find(ph => ph.id === id);
    res.send(phone);
})

app.listen(port, ()=>{
    console.log(`Iphone Server is running on ${port}`);
})