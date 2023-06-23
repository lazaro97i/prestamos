import express from 'express'
import controller from '../controller/client_controller.js'

const router = express.Router()
const { read } = controller

router.get('/', read)

export default router