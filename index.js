const express = require('express');
const app = express()
const bodyParser = require ('body-parser')
const  saudacao = require('./saudacaoMid')
const usuarioapi = require('./usuario')

app.use(bodyParser.text())

app.post('/usuario',usuarioapi.salvar)
app.get('/usuario',usuarioapi.obter)

app.post('/corpo',(req,res)=>{
    res.send(req.body)
})














app.use(saudacao)

app.get('/clientes/:id',(req,res)=>{
    res.send(`clientes${req.params.id} selecionado!`)
})


app.use((req,resp)=>{

    resp.json([
        {id:7, name:'ana',position:1},
        {id:8, name:'Bia',position:2},
        {id:9, name:'Carlos',position:3}
        
    ])


  //  resp.json({
   //     name:'ipad',
   //     price:1889.00,
    //    discount:0.12
//
   // })
   // resp.send('Estou <b>Bem</b>')
})





app.listen(3300, ()=>{
    console.log("Executando familia ....");
})