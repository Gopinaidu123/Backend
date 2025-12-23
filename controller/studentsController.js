// const getStudents = (req , res) => {

//     let stdData = {
//         name : "Gopi",
//         rol : "4255"
//     };
//     res.status(200).json({data:stdData});
// };

// const addStudents = (req , res) => {
    
//     res.status(201).json({message : "Student data added successfully wow"
//     });
// }
// export { getStudents , addStudents};

import student from "../models/models.js";
const getStudents= (req,res) =>{
    const mydata = {
        name: "thub",
        roll: "123432424636"
    };
    res.send(mydata);
     
};
const addstudents=  async(req ,res) => {
    try{
        const data = req.body;
        console.log(data);
        const addeddata = await student.insertMany(data);
        console.log(addeddata);
    }
    catch(error){
        res.status(500).json({error: error.message})
    }
}
export {getStudents , addstudents};



 

 
 
    