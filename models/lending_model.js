import mongoose from "mongoose"

const schema = new mongoose.Schema({
  date: { type: String },
  amount: { type: Number },
  typeOfPay: { type: Number },
  dues: { type: Number },
  payments: {type: [{
    date: {type: String},
    amount: {type: Number},
    detail: {type: String},
  }]},
  active: {type: Boolean},
  client_id: {type: mongoose.ObjectId}
}, { timestamps: true })

export const Lending = mongoose.model('lending', schema)