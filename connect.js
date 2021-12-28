require('dotenv').config()
const mongoose=require('mongoose')

const connection=()=>{
   mongoose.connect(process.env.Database).then(console.log("connected"))
   .catch(()=>console.log("error connecting"))
}

module.exports=connection