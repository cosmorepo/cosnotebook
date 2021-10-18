import express from "express"
import {
  authUser,
  registerUser,
  //updateUserProfile,
} from "../controllers/userController.js"
//import { protect } from "../middleware/authMiddleware.js";
const router = express.Router()

router.route("/").post(registerUser)
router.route("/login").post(authUser)

export default router
