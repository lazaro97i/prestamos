import Joi from 'joi-oid'

const schema = Joi.object({
  date: Joi.date().required().messages({
    'any.required': 'Fecha obligatoria',
    'string.empty': 'Fecha obligatoria',
    'string.min': 'Fecha demasiada corta',
    'string.max': 'Fecha demasiada larga',
    'date.base': 'La fecha es obligatoria',
  }),
  amount: Joi.number().required().positive().integer().messages({
    'any.required': 'Monto obligatorio',
    'number.empty': 'Monto obligatorio',
    'number.base': 'Monto obligatorio',
    'number.positive': 'El Monto debe ser positivo'
  }),
  dues: Joi.number().required().positive().min(1).integer().messages({
    'any.required': 'Cuotas obligatorias',
    'number.empty': 'Cuotas obligatorias',
    'number.max': 'Cuota no valido minimo 1 cuota',
    'number.base': 'Las cuotas son obligatorias',
    'number.positive': 'El numero de Cuotas debe ser positivo'
  }),
  typeOfPay: Joi.number().required(false).messages({
    'any.required': 'El tipo de pago es obligatorio',
    'number.empty': 'El tipo de pago es obligatorio',
    'number.base': 'El tipo de pago es obligatorio',
    'number.positive': 'El tipo de pago es obligatorio',
  }),
  client_id: Joi.objectId()
})

export default schema