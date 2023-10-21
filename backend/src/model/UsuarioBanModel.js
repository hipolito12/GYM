const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const UsuarioBaneadosModel = async () => {
  try {
    const UsuariosBaneados = await prisma.persona.findMany({
      where: {estado:false},
      select:{
        NombreCompleto:true,
        email:true,
        sexo:true,
        telefono:true,

      }
    })
    console.log(UsuariosBaneados);
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
          NombreCompleto:true,
          email:true,
          sexo:true,
          telefono:true,
  
        }
      })
      console.log(UsuariosNoBaneados);
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
        const UsuarioBaneado = await prisma.persona.update({
          where: {dni:dni},
          data: {estado:false}
        })
        console.log(UsuarioBaneado);
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
          where: {dni:dni},
          data: {estado:true}
        })
        console.log(UsuarioBaneado);
        return UsuarioBaneado;
      } catch (e) {
        console.log(e.message);
        return e.message;
      }
    
    }







  module.exports = {UsuarioBaneadosModel,UsuarioHabilitadosModel,BanearUsuarioModel,HabilitarUsuarioModel}