const mongoose = require("mongoose");

const ProdutoSchema = new mongoose.Schema({
  en: { 
    name: String, 
    subtitle: String, 
    description: String, 
    price: Number },
  pt: { 
    name: String, 
    subtitle: String, 
    description: String, 
    price: Number 
}
});

module.exports = ProdutoSchema;