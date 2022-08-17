const mongoose = require("mongoose")
const conexao = ()=>{
    const atlas = mongoose.connect("mongodb+srv://userat:15270@fiaptecnico.9tx6d.mongodb.net/validades")
}
const modelo = mongoose.Schema({
    produto:String,validade:Date,status:{type:Number,default:0}
})
const produtos = mongoose.model("produtos",modelo)

module.exports = {conexao,produtos}