import { Client } from '../models/client_model.js'


const controller = {

  read: async (req, res, next) => {

    try{
      
      const clients = await Client.find()

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

    console.log(id)

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
  }
}

export default controller