import express from 'express'
import controller from '../controller/client_controller.js'
import validator from '../middleware/validator.js'
import schema from '../schemas/client_schema.js'

const router = express.Router()
const { read, deleteOne, create } = controller

router.get('/', read)
router.delete('/', deleteOne)
router.post('/', validator(schema),  create)

export default router