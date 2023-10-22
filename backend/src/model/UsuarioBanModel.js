const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const UsuarioBaneadosModel = async () => {
  try {
    const UsuariosBaneados = await prisma.persona.findMany({
      where: {estado:false},
      select:{
        dni:true,
        NombreCompleto:true,
        email:true,
        sexo:true,
        telefono:true,

      }
    })
    return UsuariosBaneados;
  } catch (e) 
  {
    console.log(e.message);
    return e.message;

  }
};



const UsuarioHabilitadosModel = async () => {
    try {
      const UsuariosNoBaneados  = await prisma.persona.findMany({
        where: {estado:true},
        select:{
        dni:true,
          NombreCompleto:true,
          email:true,
          sexo:true,
          telefono:true,
  
        }
      })
      return UsuariosNoBaneados;
    } catch (e) 
    {
      console.log(e.message);
      return e.message;
  
    }
  };


    const BanearUsuarioModel = async (dni) => 
    {
        try {
          console.log('asa');
        const UsuarioBaneado = await prisma.persona.update({
          where: {dni:Number.parseInt(dni)},
          data: {estado:false}
        })
        return UsuarioBaneado;
      } catch (e) {
        console.log(e.message);
        return e.message;
      }
    
    }

    const HabilitarUsuarioModel = async (dni) => 
    {
        try {
        const UsuarioBaneado = await prisma.persona.update({
          where: {dni:Number.parseInt(dni),},
          data: {estado:true}
        })
        return UsuarioBaneado;
      } catch (e) {
        console.log(e.message);
        return e.message;
      }
    
    }







  module.exports = {UsuarioBaneadosModel,UsuarioHabilitadosModel,BanearUsuarioModel,HabilitarUsuarioModel}