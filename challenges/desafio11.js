db.produtos.find({ nome: { $nin: ["McChicken", "Big Mac"] } },
  { _id: false, nome: true, curtidas: true, vendidos: true });