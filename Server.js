const productRoutes=require('./Routes/prodcatRoutes')
const categoryRoutes = require('./Routes/categoryRoute')
// const associationRoutes = require('./Routes/associationRoute')
const bodyParser = require('body-parser');

const express   = require('express')
const app = express()

app.use(bodyParser.json())

app.use('/api/product',productRoutes)
app.use('/api/category',categoryRoutes)
// app.use('/api/association',associationRoutes)

app.listen(6000,()=>{
    console.log('server is up and running port no:6000') 
})

