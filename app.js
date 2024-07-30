import express from "express";
import bodyParser from "body-parser";
import todoroutes from './routes/todoRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware Setup
app.use(bodyParser.json());

//Routes 
app.use("/api/todos", todoroutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
});