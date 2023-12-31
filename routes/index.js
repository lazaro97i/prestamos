import express from 'express'
const router = express.Router()
import clients from './client_router.js'
import lending from './lending_router.js'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

router.use('/clients', clients)
router.use('/lending', lending)

export default router
