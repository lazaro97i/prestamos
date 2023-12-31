import { Lending } from "../models/lending_model.js"

const controller = {

  create: async(req, res, next) => {

    const { date, amount, typeOfPay, dues, payments, active=true, client_id } = req.body


    try{
      const lending = await Lending.create({ date:date, amount:amount, typeOfPay:typeOfPay, dues:dues, payments:payments, active:active, client_id:client_id })

      if(lending){
        res.status(201).json({
          success: true,
          message: 'Lending created successfully :)',
          new_lending: lending
        })
      }else{
        res.status(404).json({
          success: false,
          message: 'Could not create lending :('
        })
      }
    }catch(err){
      console.log(err)
      next()
    }
  },
  getLendingsOfClient: async(req, res, next) => {

    try{
      const lendings = await Lending.find({client_id: req.query.id})

      if(lendings){
        res.status(200).json({
          success: true,
          message: "Lendings found successfully :)",
          lendings: lendings
        })
      }else{
        res.status(404).json({
          success: false,
          message: "Lending not found :("
        })
      }

    }catch(err){
      console.log(err)
      next()
    }
  },
  getLending: async(req, res, next) => {
    
    const { id }  = req.params
    
    try{
      
      const lending = await Lending.findById(id)

      if(lending){
        res.status(200).json({
          success: true,
          message: "Lending found successfully :)",
          lending: lending
        })
      }else{
        res.status(404).json({
          success: false,
          message: "Lending not found :("
        })
      }

    }catch(err){
      console.log(err)
      next()
    }
  },
  getAllLendings: async(req, res, next) => {

    try{
      const lendings = await Lending.find()
      if(lendings){
        res.status(200).json({
          success: true,
          lendings: lendings,
          message: 'Lendings found successfully :)'
        })
      }else{
        res.status(404).json({
          success: false,
          message: 'Lendings not found :('
        })
      }
    }catch(e){
      console.log(e)
      next()
    }
  }
  

}

export default controller