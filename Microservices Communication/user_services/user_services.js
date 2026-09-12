import express from 'express';
const app=express();
const PORT=5000;
app.get('/user',(req,res)=>{
    res.json([
        {id:1,name:"Puneet"},
        {id:2,name:"Mohit"}
    ])
})

app.get('/products',async (req,res)=>{
    try{
        const response=await fetch("http://product_container:5001/products/");
        const products = await response.json()
        res.json({
            user:"Puneet",
            Product : products
        })


    }catch(error){
        res.status(500).json({
            message : "Could not communicate with the product services"
        })

    }
})
app.listen(PORT,()=>{
    console.log(`User Server is up at Port http://localhost:${PORT}`);
})