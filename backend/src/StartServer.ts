import express from 'express' 
import cors from 'cors'
//const logIn = require('./routes/logIn') 

const app = express()
app.use(express.json)

/*middleware*/ 
app.use(cors({origin: ['http://localhost:4200' , 'http://localhost:3000']}))
app.use(express.json())
app.use(express.text())


/*rutas*/ 
app.use('/api', require('./routes/logIn'));

/*servidor*/ 
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000/")
})

app.use((req, res) => {
    return res.status(404).send({ message: 'Resource not found' })
})
