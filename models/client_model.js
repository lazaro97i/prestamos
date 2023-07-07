import mongoose from "mongoose"

const schema = new mongoose.Schema({
  name: {type: String},
  dni: {type: Number},
  phone: {type:Number},
  address: {type: String},
  city: {type: String},
  date: {type: String},
  amount: {type: Number}
}, {timestamps: true})

export const Client = mongoose.model('client', schema)