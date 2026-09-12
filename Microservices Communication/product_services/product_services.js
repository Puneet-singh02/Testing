import express from "express";
const app=express();
const PORT = 5001;

const products =[
        {
            id: 1,
            name: "T-Shirt",
            price: 499
        },
        {
            id:2,
            name:"Hoodies",
            price : 999
        }
    ]

app.get('/products',(req,res)=>{
    res.json(products)
})

app.get('/products/:id',(req,res)=>{
const product=products.find((product)=>{
    return product.id===Number(req.params.id);})

    if(!product){
        console.log("Product not found");
        return res.status(404).json({
            message : "Not found"
        })}
    res.json(product);
})

app.listen(PORT,()=>{
    console.log("Product server started");
})
