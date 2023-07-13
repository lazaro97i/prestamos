import express from 'express'
import controller from '../controller/lending_controller.js'

const router = express.Router()
const { create, getLendingsOfClient, getLending } = controller

router.post('/', create)
router.get('/', getLendingsOfClient)
router.get('/:id', getLending)

export default router