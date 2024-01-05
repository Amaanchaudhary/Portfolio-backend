import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './Routes/index.js';

const app = express();

dotenv.config()
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())


app.get("/" , (req , res) => {
    res.send("welcome to portfolio backend server")
})

app.use("/api/v1" , router)

mongoose.connect(process.env.MONGOURL).then(() => console.log("Database Connected"))
app.listen(8000, () => console.log("app is running on port 8000"))