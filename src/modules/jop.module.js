const mongoose = require("mongoose")
const jobSchema = new mongoose.Schema({
    company:String,
    position:String,
    status:{
        type:String,
        enum:["open","Colsed","In progress"],
        default:"Open"
    },
    postedAt:{
        type:Date,
        default:Date.now
    },
    Applicant:String,
    Experience:String,
    Email:String,
    MobileNumber:Number,
    companyName:{
        type:String,
        required:true
    },
    field:{
        type:String,
        required:true
    },
    location:String,
    salaryRange:String,
    currency:{type:String,
     default:"USD"
    },
    jobDescription:String,
    JobRequirements:String,
    skills:String

})
const Job = mongoose.model("Job",jobSchema)
module.exports =Job;