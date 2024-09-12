import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import helmet, { crossOriginResourcePolicy } from "helmet"
import cors from "cors"
import morgan from "morgan"
//Route imports 
import dashboardRoutes from "./routes/dashboardRoutes"
import productRoutes from "./routes/productRoutes"
//Configuratiom

dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(morgan("common"))
app.use(cors())

// ROUTES//
app.use("/dashboard", dashboardRoutes)
app.use("/products", productRoutes)




//SERVER
const port = process.env.PORT || 3001;
app.listen(port, () =>{
    console.log(`Server running on ${port}`)
})
