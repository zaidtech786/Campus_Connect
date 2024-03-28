const express = require("express")
const router = express.Router();
const {Admission,getAllStudent,studentLogin,SearchStudent,updateStudent,getSingleStudent} = require("../Controllers/AdmissionController")

router.post("/admission",Admission);
router.get("/getallstu",getAllStudent);
router.post("/login",studentLogin);
router.post("/search",SearchStudent);
router.put("/update/:id",updateStudent);
router.get("/getstudent/:id",getSingleStudent);

module.exports = router