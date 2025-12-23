
import mongoose from "mongoose";
const addStud = new mongoose.Schema( {
     thubname: {
        type: String
    },
    thubName : {
        type: String
    },
    thubphone: {
        type : Number
    }
});
const student = mongoose.model("student",addStud)
export  default student;