import express from "express";
const app = express();

app.get("/", (req, res) => { 
    res.send(req.headers['x-real-ip']) 
}); 

app.listen(80, () => { 
    console.log(`Express is now Live.`)
}); 


