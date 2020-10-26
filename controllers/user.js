const User = require('../models/User')

exports.CreateTask = async(req,res)=>{
    try {
        const{name,designation,task,email,password} = req.body
        const newtask = await User.create({name,designation,task,email,password})
        res.status(200).send({
        success:true,
        data:newtask
    })   
    } catch (error) {
        res.status(500).send({
            error
        })
    } 
}

exports.GetTasks = async(req,res)=>{
    try {
        const task = await User.find()
        res.status(200).send({
        success:true,
        data:task
    }) 
    } catch (error) {
        res.status(500).send({
            error
        })
    }   
}

exports.GetTask = async(req,res)=>{
    try {
        const task = await User.findById(req.params.id)
        res.status(200).send({
        success:true,
        data:task
    })  
    } catch (error) {
         res.status(500).send({
            error
        })
    }
      
}

exports.UpdateTask = async(req,res)=>{
    try {
        const task = await User.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    })
        res.status(200).send({
        success:true,
        data:task
    })  
    } catch (error) {
        res.status(500).send({
            error
        })
    }
      
}

exports.Deletetask = async(req,res)=>{
    try {
        const task = await User.findOneAndDelete(req.params.id)
        res.status(200).send({
        success:true,
    }) 
    } catch (error) {
        res.status(500).send({
            error
        })
    }
}