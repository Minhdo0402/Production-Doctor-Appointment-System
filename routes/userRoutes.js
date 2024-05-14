const express = require("express");

const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorsController,
  bookAppointmentController,
  bookingAvailabilityController,
  userAppointmentController,
} = require("../controllers/userCtrl");

const authMiddleware = require("../middlewares/authMiddleware");

//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

//Auth || POST
router.post("/getUserData", authMiddleware, authController);

//Apply Doctor || POST
router.post("/apply-doctor", authMiddleware, applyDoctorController);


//Notification Doctor || POST
router.post("/get-all-notification", authMiddleware, getAllNotificationController);

//Notification Doctor || POST
router.post("/delete-all-notification", authMiddleware, deleteAllNotificationController);

//GET ALL DOCTOR
router.get('/getAllDoctors',authMiddleware, getAllDoctorsController)

// BOOK APPOINTMENT
router.post('/book-appointment',authMiddleware,bookAppointmentController)

//BOOKING AVAILaBILITY 
router.post('/booking-availbility',authMiddleware,bookingAvailabilityController)

//Appointment List
router.get('/user-appointments',authMiddleware,userAppointmentController)

module.exports = router;
