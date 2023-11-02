const express = require('express');
const cors = require('cors');
//const logIn = require('./routes/auth')
const { swaggerDocs: V1SwaggerDocs } = require('./v1/swagger');

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
app.use('/api', require('./routes/auth.js'));
app.use('/api', require('./routes/User.js'));
app.use('/api', require('./routes/rutinas.js'));
app.use('/api', require('./routes/Roles.js'));
app.use('/api', require('./routes/rutinasP.js'));
app.use('/api', require('./routes/actividad.js'));

/*servidor*/ 
app.listen(3000, () => {
    console.log('Server listening on port 3000');
    V1SwaggerDocs(app,  3000);
});




