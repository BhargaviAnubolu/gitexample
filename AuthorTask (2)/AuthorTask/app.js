const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/AuthorDb'

const index=express()

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

index.use(express.json())
const Route=require('./Routers/post')
index.use('/post',Route)
index.listen(3001,()=>{
    console.log("Post Server connected");
})
app.use(express.json())

const Router = require('./Routers/Author')
app.use('/router',Router)

app.listen(3000, () => {
    console.log('Server started')
})