
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
const sir = mongoose.model("sir",studentSchema)
export  default student;