// el model sirve para hablar con prisma 
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();




const searchAllModel = async () =>{ //va algo en el arg de async(?)
  prisma.rutinagenerica.findMany();
} 

module.exports = { searchAllModel };
