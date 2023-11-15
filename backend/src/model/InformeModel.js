const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const Informe = async ()=> {
    try {
        let Ingresos = {};
        const ventas = await prisma.venta.findMany({
            
           select:{
                CodVenta:true,
                persona:{
                    select:{
                        NombreCompleto:true
                    }
                },
                NombeProducto:true,
                precio:true,
                cantidad:true,
                FechaVenta:true,
           }
        });
        const cuotas = await prisma.cuota.findMany({
            select:{
                CodCuota:true,
                FechaPago:true,
                persona:{
                    select:{
                      NombreCompleto:true
                    }
                },
                preciocuota:{
                    select:{
                        valor:true
                    }
                },
            }
        });
        
        Ingresos.ventas = ventas;
        Ingresos.cuotas = cuotas;
        return Ingresos;

    } catch (error) {
        console.log(error.message);
        return error
    }
};




module.exports = {Informe};