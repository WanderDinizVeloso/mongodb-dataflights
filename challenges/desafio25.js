db.voos
  .deleteMany(
    { 
      "empresa.name": "AZUL",
      litrosCombustivel: { $lt: 400 },
    },
  );
