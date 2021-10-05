db.voos
  .find(
    { 
      litrosCombustivel: {
        $not: { $gt: 600 },
        $exists: true,
      },
      "empresa.name": {
        $nin: [
          "GOL",
          "AZUL",
        ],
      },
    },
    {
      vooId: 1,
      litrosCombustivel: 1,
      "empresa.nome": 1,
      _id: 0,
    },
  )
  .limit(1);
