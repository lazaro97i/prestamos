import { Client } from '../models/client_model.js'


const controller = {

  read: async (req, res, next) => {

    try{
      
      const clients = await Client.find()
      clients.sort((a, b) => a.name.localeCompare(b.name))
      if(clients){
        res.status(200).json({
          success: true,
          response: clients
        })
      }else{
        res.status(404).json({
          success: false,
          response: 'Clients not found :('
        })
      }

    }catch(err){
      console.log(err)
      next()
    }
    
  },
  deleteOne: async (req, res, next) => {

    const { id } = req.body

    try{
      const client = await Client.findByIdAndDelete(id)
      if(client){
        res.status(200).json({
          success: true,
          response: 'Client deleted successfully',
          client_deleted: client
        })
      }else{
        res.status(404).json({
          success: false,
          response: 'Client not found :('
        })
      }
    }catch(err){
      console.log(err)
      next()
    }
  },
  create: async(req, res, next) => {
    
    const {name, dni, phone, address, city, date, amount, payment, dues} = req.body

    try{
      const client = await Client.create({name: name, dni: dni, phone: phone, address: address, city: city, date: date, amount: amount, payment: payment, dues: dues})
      if(client){
        res.status(201).json({
          success: true,
          message: 'Client created successfully :)',
          new_client: client
        })
      }else{
        res.status(404).json({
          success: false,
          message: 'Could not create client :('
        })
      }     
    }catch(err){
      console.log(err)
      next()
    }
  }
}

export default controller