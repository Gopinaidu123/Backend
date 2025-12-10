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

const getStudents= (req,res) =>{
    let stdData= 
    {
        "name" : "Tarun",
        "Roll" :"1234"
    };
    res.status(200).json({data : stdData});
};
const addstudents=(req ,res) => {
    res.status(201) .json ({message : "data added" });
}
export {getStudents , addstudents};