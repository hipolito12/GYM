const express = require('express');
const cors = require('cors');
//const logIn = require('./routes/auth')
const informes=require('./routes/Informe.js')
const UpdateCuota = require('./routes/Cuota.js');
const TipoRutinas = require('./routes/TipoRutinas.js');

const app = express();

/*middleware*/
app.use(cors({ origin: ['http://localhost:4200', 'http://localhost:3000'] }));
app.use(express.json());
app.use(express.text());

/*rutas*/ 
app.use('/api', require('./routes/auth.js'));
app.use('/api', require('./routes/User.js'));
app.use('/api', require('./routes/Blog.js'));
app.use('/api', require('./routes/MisRutinas.js'));
app.use('/api', require('./routes/imc.js'));
app.use('/api', require('./routes/ventas.js'));
app.use('/api', require('./routes/pagoCuota.js'));
app.use('/api', require('./routes/UsuarioBan'));
app.use('/api', require('./routes/actividadDocente.js'));
app.use('/api', require('./routes/TipoBlog.js'));
app.use('/api', require('./routes/auth.js'));
app.use('/api', require('./routes/User.js'));
app.use('/api', require('./routes/rutinas.js'));
app.use('/api', require('./routes/Roles.js'));
app.use('/api', require('./routes/rutinasP.js'));
app.use('/api', require('./routes/actividad.js'));
app.use('/api',informes);
app.use('/api',UpdateCuota)
app.use('/api',TipoRutinas );
/*servidor*/
app.listen(3000);
