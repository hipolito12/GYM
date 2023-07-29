const express =require('express')  
const cors=require('cors')
const logIn = require('./routes/logIn') 

const app = express()

/*middleware*/ 
app.use(express.json())
app.use(express.text())
app.use(cors())

/*rutas*/ 
app.use(logIn)
/*servidor*/ 
app.listen(3000)