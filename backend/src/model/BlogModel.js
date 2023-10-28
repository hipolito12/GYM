const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const ObtenerBlog = async () => {
  try {
    const blogs = await prisma.post.findMany({
      where: {
        visible: true,
      },
      select: {
        idPost: true,
        TipoPostFk: true,
        Titulo: true,
        Cuerpo: true,
        imagen: true,
        fecha: true,
        persona: { select:{NombreCompleto: true} }
      },
    });
   
    return blogs;
  } catch (error) {
    console.log("error en listado de blogs" + error);
    res.status(500).json({ msg: error.message });
  }
};


const ObtenerTipoBlog = async () => 
{
    try 
    {
            const tipos = await prisma.tipopost.findMany({
                select: {
                    TipoId: true,
                    NombreTIpo: true,
                   
                }
            });
            
            return tipos;
        
    }
    catch(e)
    {
        console.log("error en listado de blogs"+e.message)
       return  res.status(500).json({msg: e.message +"desde Model "})
    }
}

const CrearBlog  = async (blogData,dni) => 
{  try
  {let blog = await prisma.post.create({
    data: {
      Titulo: blogData.titulo,
      Cuerpo: blogData.ckeditorContent,
      TipoPostFk: 1,
      DniAutor: dni,
      imagen: blogData.imagen,
      fecha: new Date(),
    },
  });

  }
    catch(e)
    {
        console.log("error en crear blog "+e.message)
        return  e.message
    }

}


const ActualizarBlog  = async (blog) => 
{
  try
  {
    const {titulo,imagen,ckeditorContent, idPost} = blog
    const result = await prisma.post.update({
      where: {
        idPost: idPost,
      },
      data: {
        Titulo: titulo,
        Cuerpo : ckeditorContent,
        imagen : imagen,
        
      },
    });
    return result;
  }
  catch(e)
  {
    console.log("error en actualizar blog "+e.message)
    return  e.message   }
}

const EliminarBlog  = async (id) => 
{
  try
  {
    const blog = await prisma.post.update({
      where: {
        idPost: Number.parseInt(id) ,
      },
      data: {
        visible: false,
      },
    });
    return blog;
  }
  catch(e)
  {
    console.log("error en eliminar blog"+e.message)
    return e.message
  }
}




module.exports = { ObtenerBlog,ObtenerTipoBlog ,CrearBlog,ActualizarBlog,EliminarBlog};
