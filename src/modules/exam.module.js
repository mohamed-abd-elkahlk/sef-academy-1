const mongoose = require('mongoose');


const examSchema = new mongoose.Schema({
name:String,
course:{
    type:mongoose.Types.ObjectId,
    ref:"Course",
    required:[true,"course id is required" ],
},
duration:{
    type:String,
    default:"90",
    trim:true
},
link:{
    type:String,
    required:[true,"Exam link id is required"],
    trim:true
},
startingDate:{
    type:Date,
    required:[true,"Start date is required"]
}
},{timestamps:true})



exports.Exam = mongoose.model("Exam",examSchema);