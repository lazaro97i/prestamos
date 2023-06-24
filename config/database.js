import mongoose from "mongoose"
import 'dotenv/config.js'

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
}

mongoose.connect(process.env.MONGO_URI, options)
  .then( ()=> console.log("Database Conected"))
  .catch(err => console.log(err))