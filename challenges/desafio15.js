db.produtos.updateMany({}, { $set: { avaliacao: NumberInt(0) } });

db.produtos.updateMany({ tags: "bovino" }, {
  $inc: { avaliacao: NumberInt(5) },
});

db.produtos.updateMany({ tags: "ave" }, {
  $inc: { avaliacao: NumberInt(3) },
});

db.produtos.find({}, { _id: false, nome: true, avaliacao: true });