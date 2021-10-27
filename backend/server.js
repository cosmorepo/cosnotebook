import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
//import colors from "colors"
import path from "path"

import noteRoutes from "./routes/noteRoutes.js"
import userRoutes from "./routes/userRoutes.js"
//import { errorHandler, notFound } from "./middleware/errorMiddleware.js"

const app = express()
dotenv.config()
connectDB()

app.use(express.json())

// app.get("/api/notes", (req, res) => {
//   res.json(notes)
// })

app.use("/api/users", userRoutes)
app.use("/api/notes", noteRoutes)

// ============= deployment ===============

const __dirname = path.resolve()
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")))

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(
        __dirname,
        "../frontend/build",
        "../build",
        "../build/index.html"
      )
    )
  })
} else {
  app.get("/", (req, res) => {
    res.send("api is runningggdfgdf...")
  })
}

// =============  deployment ===============

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server started on port ${PORT}`))
