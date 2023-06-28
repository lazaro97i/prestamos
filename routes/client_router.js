import express from 'express'
import controller from '../controller/client_controller.js'

const router = express.Router()
const { read, deleteOne, create } = controller

router.get('/', read)
router.delete('/', deleteOne)
router.post('/', create)

export default router