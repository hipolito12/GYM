const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();
const port = 4200;

app.use(express.json());

// Ruta para guardar una rutina personalizada
app.post('/guardar-rutina-personalizada', async (req, res) => {
  try {
    const {
      IdActividadesfk,
      TipoRutinafk,
      PersonaIdFK,
      DescripcionRutina,
      imagenes,
    } = req.body;

    // Guardar los datos en la base de datos utilizando Prisma
    const rutinaPersonalizada = await prisma.rutinaPersonalizada.create({
      data: {
        IdActividadesfk,
        TipoRutinafk,
        PersonaIdFK,
        DescripcionRutina,
        imagenes,
      },
    });

    res.json(rutinaPersonalizada);
  } catch (error) {
    console.error('Error al guardar la rutina personalizada:', error);
    res.status(500).json({ error: 'Error al guardar la rutina personalizada' });
  }
});

app.listen(port, () => {
  console.log(`Servidor Express corriendo en el puerto ${port}`);
});
