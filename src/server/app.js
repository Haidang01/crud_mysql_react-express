import dotenv from 'dotenv'
dotenv.config();
import express from "express";
const app = express();
import cors from "cors";
import "./db/conn.js";
import router from "./Routes/router.js";

const port = 8001;





// middleware
app.use(express.json())
app.use(cors());

app.use(router);
app.listen(port, () => {
    console.log("server starts at port no :" + port);
})