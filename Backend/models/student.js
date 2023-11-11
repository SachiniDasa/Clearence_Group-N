const mongoose =require('mongoose')
const bcrypt = require('bcrypt')
const { isEmail } = require('validator');

const studentSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:false
    },
    email:{
        type:String,
        unique:true,
        required:true,
        validate: [isEmail,'invalid email']
    },
    contactNumber:{
        type:String,
        required:false
    },
    combination:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

studentSchema.pre('save',async function (next){
   const user = this;
   if (student.isModified('password')){
       student.password = await bcrypt.hash(student.password,10);
   }
   next();
})


const Student = mongoose.model('Student',studentSchema);
module.exports = Student;

