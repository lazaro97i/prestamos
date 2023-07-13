import Joi from "joi"

const schema = Joi.object({
  name: Joi.string().required().min(3).max(200).messages({
    'any.required': 'Nombre obligatorio',
    'string.empty': 'Nombre obligatorio',
    'string.min': 'Nombre demasiado corto',
    'string.max': 'Nombre demasiado largo',
    'string.base': 'El nombre debe ser un texto',
  }),
  dni: Joi.number().required().positive().integer().messages({
    'any.required': 'Dni obligatorio',
    'number.empty': 'Dni obligatorio',
    'number.max': 'Dni no valido minimo 8 caracteres',
    'number.base': 'El Dni debe ser un numero valido',
    'number.positive': 'El numero de Dni debe ser positivo'
  }),
  phone: Joi.number().required().positive().min(9).integer().messages({
    'any.required': 'Numero obligatorio',
    'number.empty': 'Numero obligatorio',
    'number.min': 'Numero no valido minimo 9 caracteres',
    'number.max': 'Numero no valido maximo 13 caracteres',
    'number.base': 'Numero no valido',
    'number.positive': 'Numero no valido, no incluir signos'
  }),
  address: Joi.string().required().min(3).max(10000).messages({
    'any.required': 'Direccion obligatoria',
    'string.empty': 'Direccion obligatoria',
    'string.min': 'Direccion demasiado corta',
    'string.max': 'Direccion demasiado larga',
    'string.base': 'La Direccion debe ser un texto',
  }),
  city: Joi.string().required().min(3).max(10000).messages({
    'any.required': 'Barrio/Ciudad obligatorio',
    'string.empty': 'Barrio/Ciudad obligatorio',
    'string.min': 'Barrio/Ciudad demasiado corta',
    'string.max': 'Barrio/Ciudad demasiado larga',
    'string.base': 'La Barrio/Ciudad debe ser un texto',
  }),
  lendings: Joi.array()
})

export default schema