import express from 'express'
import { router } from './routes'
import path from 'path'
import cors from "cors"

const app = express()

//cors middleware
const allowedOrigins = ['http://localhost']
const options: cors.CorsOptions = {
  origin: '*'
}

app.use(cors(options))

const PORT = 3333

app.use(express.json())
app.use(router)

app.use("/images", express.static(path.join(__dirname, "..", "uploads")))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}, http://localhost:${PORT}`)
})




