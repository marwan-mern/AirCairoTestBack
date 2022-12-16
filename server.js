import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from  "cors";
import dotenv from "dotenv"


import userRoute from './routes/userRoute.js';
import formRoute from './routes/formRoute.js';









const app = express();
dotenv.config()


app.use(bodyParser.json({limit:`30mb`,extended:true}));
app.use(bodyParser.urlencoded({limit:`30mb`,extended:true}));

app.use(cors());

//Routes

app.use(`/User`,userRoute)
app.use(`/Forms`,formRoute)









const PORT = process.env.PORT || 6050;
mongoose.set('strictQuery', false);
mongoose.connect(process.env.CONNECTION_URL,)
.then(()=>{app.listen(PORT,()=>{console.log(`Server Runs On Port : ${PORT}`)})})
.catch((err)=>{ console.log(err.message)});

