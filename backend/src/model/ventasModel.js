const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const nuevaVenta = async (id,venta) => {
  try {
     await prisma.venta.create({
      data: {
        TrabajadorIDni: id,
        NombeProducto: venta.nombreDelProducto,
        precio: (venta.precio * venta.cantidad ),
        cantidad: venta.cantidad
      },
    });
    return venta;
  } 
  catch (e) 
  {
    console.error(e.message);
    return e.message;
  }
};

module.exports = { nuevaVenta };
