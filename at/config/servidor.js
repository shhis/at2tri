const express = require("express")
const app = express()

const porta = process.env.PORT ||4040

app.use(express.urlencoded({extended:false}))

const consign = require("consign")
consign().include("./routes").into(app)

module.exports = {app,porta}