// import experss from "express";
// import { getStudents, addStudents } from "../controllers/studentsController.js";  
// const router = experss.Router();

// router.get("/get-students", getStudents);
// router.post("/add-students", addStudents);
// export default router;

import express from'express';
import { getStudents,addstudents } from '../controller/studentsController.js';
const router = express.Router();
router.get('/get-student' ,getStudents);
router.post('/add-student' ,addstudents);
export default router;