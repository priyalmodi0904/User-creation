const express=require('express');
const app=express();
const userModel=require("./usermodel")
app.get('/',(req,res)=>{
    res.send("heyy")
})

app.get('/create',async(req,res)=>{
    let createduser=await userModel.create({
        name:"priyal",
        username:"priyal modi",
        email:"priyalmodi2004@gmail.com"
    })
    res.send(createduser)


})
app.get('/update',async(req,res)=>{
    let updateduser=await userModel.findOneAndUpdate({username:"priyal"},{name:"modi"},{new:true})
    res.send(updateduser)
})
app.get('/read',async(req,res)=>{
    let readuser=await userModel.find()
    res.send(readuser)
})


app.get('/delete',async(req,res)=>{
    let deleteduser=await userModel.findOneAndDelete({username:"priyal"})
    res.send(deleteduser)
})





app.listen(3000)
