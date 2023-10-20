const express =require('express')  
const cors=require('cors')
//const logIn = require('./routes/auth') 

const app = express()

/*middleware*/ 
app.use(cors({origin: ['http://localhost:4200' , 'http://localhost:3000']}))
app.use(express.json())
app.use(express.text())

/*rutas*/ 
app.use('/api', require('./routes/auth.js'));
app.use('/api', require('./routes/User.js'));
app.use('/api', require('./routes/Blog.js'));
app.use('/api', require('./routes/MisRutinas.js'));
app.use('/api', require('./routes/imc.js'));
app.use('/api', require('./routes/ventas.js'));
app.use('/api', require('./routes/pagoCuota.js'));


/*servidor*/ 
app.listen(3000)