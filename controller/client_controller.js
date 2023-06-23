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
    
  }
}

export default controller