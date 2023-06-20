import '../../config/database.js'
import { Client } from '../client_model.js'

const clients = [
  {
    name: 'Lazaro Tomas Del Prado',
    dni: 40696364,
    phone: 3815800354,
    address: 'Alvarez Condarco 49',
    city: 'San Miguel de Tucuman'
  },
  {
    name: 'Gaston Ivan Castillo',
    dni: 40696015,
    phone: 3815111222,
    address: 'Barrio feput mza a c12',
    city: 'San Miguel de Tucuman'
  },
  {
    name: 'Agustin Lopez Garay',
    dni: 41123543,
    phone: 3815888777,
    address: 'Chacabuco 1337',
    city: 'San Miguel de Tucuman'
  },
  {
    name: 'Gustavo Andrada',
    dni: 40987655,
    phone: 3815678543,
    address: 'Jujuy 500',
    city: 'San Miguel de Tucuman'
  },
]

Client.insertMany(clients)