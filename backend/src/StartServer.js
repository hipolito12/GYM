const express =require('express')  
const cors=require('cors')
const logIn = require('./routes/logIn') 

const app = express()

/*middleware*/ 
app.use(cors({origin: ['http://localhost:4200' , 'http://localhost:3000']}))
app.use(express.json())
app.use(express.text())


/*rutas*/ 
app.use('/api', require('./routes/logIn'));

/*servidor*/ 
app.listen(3000)