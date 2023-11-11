const express =require('express');
const router=express.Router();

const students=[];

//Create a new students
router.post('/pages/Signup',(req,res)=>{
    const {userName,email,password}=req.body;
    const newStudent = {userName:userName,email:email,password:password};
    students.push(newUser);
    res.status(201).json(newStudent);
});

//User login
router.post('/pages/login',(req,res)=>{
    const {email,password} = req.body
    const student = studnets.find((u)=>u.email === email);
    if(!student ||studnet.password!==password){
        return res.status(401).json({error:'Invalid email or password'});
    }
    res.status(200).json({message:'Login sucessful',user});
})

module.exports =router