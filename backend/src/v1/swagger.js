const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Metadata info about our API
const options = {
    definition: {
        openapi: "3.0.0",
        info: { title: 'GYM API', version: '1.0.0' },
    },
    apis: ['src/routes/actividad.js'
    , 'src/routes/auth.js', 'src/routes/Blog.js', 'src/routes/imc.js'
    , 'src/routes/MisRutinas.js', 'src/routes/Roles.js', 'src/routes/rutinas.js', 'src/routes/rutinasP.js'
    , 'src/routes/User.js', 'src/prisma/schema.prisma' ],
};

// Docs en JSON format
const swaggerSpec = swaggerJSDoc(options);

/// Function to setup our docs
const swaggerDocs = (app, port) => {
    app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get('/api/v1/docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });

    console.log('Version 1 Docs are available at http://localhost:3000/api/v1/docs');
}; 

module.exports = { swaggerDocs };

