import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"
import generateToken from "../utils/generateToken.js"

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error("user already exists")
  }

  const user = await User.create({ name, email, password, pic })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error("error occuredddd")
  }
})

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error("invalid email or password")
  }
})

export { authUser, registerUser }
