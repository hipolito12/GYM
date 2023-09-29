const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const ObtenerPago = async (dni) => {
   try {
    
    let element=prisma.cuota
      .findFirstOrThrow({
        where: {
          DniFK: dni
        },
      })
      console.log(JSON.stringify(element) );
      //return element;
  } catch (e) {
    console.log(`error al buscar id de usuario ${e.message}`);
  } 

};

module.exports = { ObtenerPago };
