import express from 'express'
import controller from '../controller/lending_controller.js'
import schema from '../schemas/lending_schema.js'
import validator from '../middleware/validator.js'

const router = express.Router()
const { create, getLendingsOfClient, getLending } = controller

router.post('/', validator(schema), create)
router.get('/', getLendingsOfClient)
router.get('/:id', getLending)

export default router