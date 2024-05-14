const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { getAllUsersController, getAllDoctorsController,changeAccountStatusController } = require("../controllers/adminCtrl");


//router onject
const router = express.Router();


//GET METHODS || USERS 
router.get('/getAllUsers', authMiddleware, getAllUsersController)

//GET METHODS || DOCTORS 
router.get('/getAllDoctors', authMiddleware, getAllDoctorsController)


//POST ACCOUNT STATUS 
router.post('/changeAccountStatus', authMiddleware, changeAccountStatusController)

module.exports = router;