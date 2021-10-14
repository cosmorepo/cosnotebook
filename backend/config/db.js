const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      //   useCreateIndex: true,
    })
    console.log(`mongoDB connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`errorrr: ${error.message}`)
    process.exit()
  }
}

module.exports = connectDB
