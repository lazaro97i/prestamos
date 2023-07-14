import express from 'express'
import controller from '../controller/lending_controller.js'
import schema from '../schemas/lending_schema.js'
import validator from '../middleware/validator.js'

const router = express.Router()
const { create, getLendingsOfClient, getLending, getAllLendings } = controller

router.post('/', validator(schema), create)
router.get('/', getAllLendings)
router.get('/:id', getLendingsOfClient)
router.get('/:id', getLending)

export default router