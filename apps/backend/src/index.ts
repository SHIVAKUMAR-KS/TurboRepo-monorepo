import express from 'express';

const app = express();
import {BACKEND_URL} from "@repo/common/config"

console.log(BACKEND_URL);

app.get("/",(req,res) =>{
    res.json({
        message: "Hello World"
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})