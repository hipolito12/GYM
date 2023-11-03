const express = require('express');
const cors = require('cors');
//const logIn = require('./routes/auth')
const path = require("path");


//swagger
// const { swaggerDocs: V1SwaggerDocs } = require('./v1/swagger');
const swaggerUI = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "GYM API",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },
    apis: [`${path.join(__dirname, "./routes/*.js")}`],

};

const app = express();
const port = process.env.PORT || 3000;

/*middleware*/
app.use(cors({ origin: ['http://localhost:4200', 'http://localhost:3000'] }));
app.use(express.json());
app.use(express.text());
app.use(
    "/api-doc", 
    swaggerUI.serve, 
    swaggerUI.setup(swaggerJSDoc(swaggerSpec))
);


/*rutas*/
app.get("/", (req, res) => {
    res.send("Bienvenido a nuestra API GYM");
  }); 
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


/*servidor*/ 
app.listen(port, () => {
    console.log('Server listening on port', port);
    console.log('Version 1 of Docs available at http://localhost:3000/api-doc');
});


app.get("/", (req, res) => {
    res.send("Welcome to my API");
  });




