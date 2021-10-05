db.voos
  .deleteMany(
    { 
      "empresa.name": "AZUL",
      litrosCombustivel: { $lt: 400 },
    },
    {
      litrosCombustivel: 1,
    },
  );
