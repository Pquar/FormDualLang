const express = require("express");
const mongoose = require("mongoose");
const Produtos = require("./models/produtos");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/produtos", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Banco de dados conectado com sucesso!");
  })
  .catch((error) => {
    console.error("Erro ao conectar com banco de dados:", error);
  });

const Produto= new mongoose.model("Produto", Produtos);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Listagem de produtos
app.get("/produtos", async (req, res) => {
    try {
        const produtos = await Produto.find();
        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).send("Erro ao mostrar os produtos");
    }
});
//Listagem de um produto
app.get("/produtos/:id", async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            res.status(400).send("Id informado não é valido");
            return;
        }
        const { id } = req.params;
        const produto = await Produto.findById(id);
        res.status(200).json(produto);
    } catch (error) {
        res.status(500).send("Erro ao mostrar um produto");
    }
});
//Criação de um produto
app.post("/produtos", async (req, res) => {
  try {
    const { en, pt } = req.body;
    const produto = new Produto({ en, pt });
    await produto.save();
    res.status(200).json(produto);
  } catch (error) {
    res.status(500).send("Erro ao criar o produto");
  }
});
//Atualização de um produto
app.put("/produtos/:id", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).send("Id informado não é valido");
      return;
    }
    const { id } = req.params;
    const produto = await Produto.findOneAndUpdate(
        {_id: id},
        {en: req.body.en,
         pt: req.body.pt},
         {new: true} 
        
        );
    res.status(200).json(produto);
  } catch (error) {
    res.status(500).send("Erro ao atualizar o produto");
    console.log(error);
  }
});
//Deletar de um produto
app.delete("/produtos/:id", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).send("Id informado não é valido");
        return;
      }
    const { id } = req.params;
    const produto = await Produto.findOne({ _id: id });
    await produto.delete();
    res.status(200).json({ message: "Produto removido com sucesso!" });
  } catch (error) {
    res.status(500).send("Erro ao remover o produto");
    console.log(error);
  }
});

app.listen(3030, () => {
  console.log("Servidor rodando na porta 3030");
});
