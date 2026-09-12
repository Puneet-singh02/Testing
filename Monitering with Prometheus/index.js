import express from "express";
import client from "prom-client";
let register=new client.Registry();
client.collectDefaultMetrics({register});

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "Hello from Node.js"
    });
});

app.get('/metrics',async (req,res)=>{
    const metrics=await register.metrics()
    res.setHeader("Content-Type", register.contentType);
    
    res.send(metrics);
})

app.listen(5000, () => {
    console.log("Server running on port 5000");
});