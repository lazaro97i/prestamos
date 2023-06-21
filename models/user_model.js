import mongoose from "mongoose"

const schema = new mongoose.Schema({
  name: {type: String, required:true},
  dni: {type: Number, required: true},
  phone: {type:Number, required:true},
  address: {type: String, required: true},
  city: {type: String}
}, {timestamps: true})

export const User = mongoose.model('user', schema)