    module.exports = (app) => {
        const {conexao,produtos}=require("../config/database")

        app.get("/",async(req,res)=> {
            conexao()

            var ordem = req.query.ordem
            var resultados =  null
            var resultados =  null


            if(!ordem || ordem == 1){
               resultados = await produtos.find({status:0}).sort({validade:1})
            }
            else{
              resultados = await produtos.find({status:0}).sort({produto:1})
            }
                console.log(resultados)
            res.render("index.ejs", {resultados})
        })
        app.get("/excluir",async(req,res)=> {
            conexao()
            var id = req.query.id
            var excluir = await produtos.findOneAndRemove({
                _id:id
            })
            res.redirect("/")
        })

        app.get("/consumido",async(req,res)=> {
            conexao()
            var id = req.query.id
            var excluir = await produtos.findOneAndUpdate({
                _id:id
            },{status:1})
            res.redirect("/")
        })
        app.get("/descartado",async(req,res)=> {
            conexao()
            var id = req.query.id
            var excluir = await produtos.findOneAndUpdate({
                _id:id
            },{status:2})
            res.redirect("/")
        })

    }