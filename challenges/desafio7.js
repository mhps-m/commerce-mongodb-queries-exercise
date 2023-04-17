db.produtos.find({ 
  vendidos: { $not: { $eq: 50 } },
  tags: { $exists: false }, 
}, { _id: false, nome: true, vendidos: true });