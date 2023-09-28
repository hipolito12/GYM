

const ProximoPago = async (req, res) => 
{
    try
    {
        
        
    }
    catch(e){console.log(e.message)}
}


const ActualizarDatos = async (req, res) => 
{
    
}

const ListarRutinas = async (req, res) => 
{
    
}

const ListarDetalleRutina = async (req, res) => 
{
    
}


async function VerificoToken(res, req, next) {
    try {
      if (!req.headers.authorization) {
        return res.status(401).send("no autorizado");
      }
      let token = req.headers.authorization.split(" ")[1];
      if (token === "null") {
        return res.status(401).send("Unauhtorized Request");
      }
  
      const payload = await jwt.verify(token, "keyUsuario");
      if (!payload) {
        return res.status(401).send("Unauhtorized Request");
      }
      req.dni = payload._id;
      next();
    } catch (e) {
      
      return res.status(401).send( `Error verificar Token ${e.message}`);
    }
  }
module.exports = { ProximoPago, ActualizarDatos, ListarRutinas, ListarDetalleRutina ,VerificoToken}