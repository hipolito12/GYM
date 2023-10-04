const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const ObtenerBlog = async (req, res) => {
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


const ObtenerTipoBlog = async (req, res) => 
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
       return  res.status(500).json({msg: e.message +"desde Controller "})
    }
}

module.exports = { ObtenerBlog,ObtenerTipoBlog };
