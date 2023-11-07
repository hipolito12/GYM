const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const ObtenerPago = async (dni) => {
  
  try {
    let element = await prisma.cuota.findFirstOrThrow({
      where: {
        DniFK: dni,
      },
      select: {
        FechaPago: true,
        preciocuota:{
          select:{
            valor:true
          }
        }
      
      }
    });
   
 return element;
  } catch (e) {
    console.log(`error al buscar pago ${e.message}`);

    return element={preciocuota:{valor:  (await prisma.preciocuota.findFirstOrThrow({select:{valor:true}})).valor}}

  }
};

const ObtenerPersona = async (dni) => {
  try {
    let element = await prisma.persona.findFirst({
      where: {
        dni: dni,
      },
    });

    return element;
  } catch (e) {
    console.log(`error al buscar persona ${e.message}`);
  }
};

const ActualizarDatosModel = async (id, usuario) => {
  try {
    let element = await prisma.persona.update({
      where: {
        dni: id,
      },
      data: {
        NombreCompleto: usuario.nombrecompleto,
        direccion: usuario.direccion,
        sexo: usuario.sexo,
        email: usuario.email,
        telefono: usuario.telefono,
      },
    });
  } catch (e) {
    console.log(`error al actualizar datos ${e.message}`);
  }
};

const ObtenerActividades = async () => {
  //query con prisma para obtener las actividades y los profesores que las dictan
  try {
    const elements = await prisma.personaacargoactividad.findMany({
      select: {
      
        actividad: {
          select: {
            
            NombreActividad :true,
            Turno :true,
            Hora_Inicio: true,
            Hora_Fin : true,
            ActividadId :true,
          },
        },
        persona: {
          select: {
            NombreCompleto: true,
          },
        },
      },
    });


    return elements;
    
  } catch (e) {
    console.log(`error al buscar actividades ${e.message}`);
    return e.message;

  }
};

const ObtenerDetalleActividades = async (id) => 
{
  try
  {
    let element = await prisma.actividad.findFirst({
      where: {
        ActividadId: id,
      },
      select:
      {
        NombreActividad: true,
        Hora_Inicio: true,
        Descripcion:true,
        ActividadId:true,
        
      }
    });
    
    return element;
  }
  catch(e)
  {
    console.log(`error al buscar actividades ${e.message}`);
    return e.message;
  }
}


const BuscaCupo =async(idActividad)=>
{
  try{
    let cupo = await prisma.actividad.findFirst({
      where: { ActividadId: idActividad},
      select:{Cupo:true}
    })
    
    return cupo
    
  }
  catch(e){console.log(e)
  return e.message}
}

const  ActualizarCupoActividad= async (persona,cupo,actividad) => 
{ let NuevoCupo=cupo-1
  try{
    await prisma.asistencia.create({
      data:
      {DniFK:persona,
        ActividadFK:actividad, 
      }
    })

   await  prisma.actividad.update({
      where:{ActividadId:actividad},
      data:{Cupo:NuevoCupo}
    })

  }
  catch(e)
  {
      console.log(e.message)
      return e.message
  }





}

module.exports = {ActualizarCupoActividad ,BuscaCupo,ObtenerPago, ActualizarDatosModel, ObtenerPersona, ObtenerActividades ,ObtenerDetalleActividades};
