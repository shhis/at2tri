const { conexao, produtos } = require("../config/database")

module.exports = (app)=>{
    app.get("/cadastro",(req,res)=>{
        res.render("cadastro.ejs")
    })
    app.post("/cadastro",async(req,res)=>{
        conexao()
        const novo = await new produtos({
            produto:req.body.produto,
            validade:req.body.validade
        }).save()

        res.redirect("/cadastro")

    })
}