import React, { useEffect, useRef, useState } from 'react'
import clientActions from '../store/client/actions'
import { useDispatch, useSelector } from 'react-redux'

const { createClient } = clientActions

const AddClient = ({ action }) => {

  const [confirmClient, setConfirmClient] = useState(false)
  const clientStore = useSelector((store) => store.client)
  const dispatch = useDispatch()

  const inpName = useRef('')
  const inpDni = useRef('')
  const inpPhone = useRef('')
  const inpAddress = useRef('')
  const inpCity = useRef('')

  const created = () => {
    setTimeout(() => {
      console.log(clientStore?.clients?.success)
      if (clientStore?.clients?.success) {
        setConfirmClient(!confirmClient)
        action()
      }
    }, 800)

  }

  const addClient = async(e) => {
    const data = {
      name: inpName.current.value,
      dni: inpDni.current.value,
      phone: inpPhone.current.value,
      address: inpAddress.current.value,
      city: inpCity.current.value
    }
    dispatch(createClient(data))
    await created()
  }


  const ConfirmClient = () => {
    return (
      <div className='absolute px-1 top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-slate-950 bg-opacity-90'>
        <div className='flex justify-center w-full max-w-[700px] rounded-md md:w-4/5 bg-slate-300 py-10'>
          <div className=' grid grid-cols-2 gap-3 items-center'>
            <p className='text-slate-950 font-[600] text-3xl pb-10 px-5 col-span-2'>Desea confirmar cliente ?</p>
            <p className='px-5 text-lime-700 col-span-2 font-[600] text-2xl pb-5'>{inpName.current.value}</p>
            <span className='font-[700] col-span-1 text-slate-950 pr-3'>Documento:</span><p className=' text-slate-950 font-[500] col-span-1'>{inpDni.current.value}</p>
            <span className='font-[700] col-span-1 text-slate-950 pr-3'>Telefono:</span><p className=' text-slate-950 font-[500] col-span-1'>{inpPhone.current.value}</p>
            <span className='font-[700] col-span-1 text-slate-950 pr-3'>Direccion:</span> <p className=' text-slate-950 font-[500] col-span-1'>{inpAddress.current.value}</p>
            <span className='font-[700] col-span-1 text-slate-950 pr-3'>Barrio / Ciudad:</span><p className=' text-slate-950 font-[500] col-span-1'>{inpCity.current.value}</p>
            <div className='flex w-full justify-center items-center gap-20 pt-10 col-span-2'>
              <input onClick={addClient} className='bg-lime-700 active:bg-lime-600 w-[100px] cursor-pointer py-1.5 rounded-md font-[800]' type="button" value="Confirmar" />
              <input onClick={() => setConfirmClient(!confirmClient)} className='bg-red-800 active:bg-red-700 w-[100px] cursor-pointer py-1.5 rounded-md font-[800]' type="button" value="Cancelar" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='absolute px-1 top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-slate-950 bg-opacity-50'>
      {
        confirmClient ?
          <ConfirmClient />
          :
          null
      }
      <div className=' w-full rounded-md md:w-4/5 bg-slate-300 flex flex-col py-10'>
        <p className='text-slate-950 font-[600] text-3xl pb-10'>Nuevo Cliente</p>
        <form action="get" className='w-full max-w-[900px] self-center'>
          <label className='flex flex-wrap items-center justify-center md:grid md:grid-cols-3 gap-2 px-10 text-slate-950 font-[500] mb-5'>
            <p className=' text-start w-full md:w-auto col-span-1
            '>Nombre y Apellido:</p>
            <input ref={inpName} className='w-full col-span-2 h-auto rounded-sm p-1 px-3 outline-none bg-slate-100 bg-opacity-60' type="text" name="name" id="name" />
          </label>
          <label className='flex flex-wrap items-center justify-center md:grid md:grid-cols-3 gap-2 px-10 text-slate-950 font-[500] mb-5'>
            <p className=' text-start w-full md:w-auto col-span-1
            '>Documento:</p>
            <input ref={inpDni} className='w-full col-span-2 h-auto rounded-sm p-1 px-3 outline-none bg-slate-100 bg-opacity-60' type="number" name="dni" id="dni" />
          </label>
          <label className='flex flex-wrap items-center justify-center md:grid md:grid-cols-3 gap-2 px-10 text-slate-950 font-[500] mb-5'>
            <p className=' text-start w-full md:w-auto col-span-1
            '>Celular:</p>
            <input ref={inpPhone} className='w-full col-span-2 h-auto rounded-sm p-1 px-3 outline-none bg-slate-100 bg-opacity-60' type="number" name="phone" id="phone" />
          </label>
          <label className='flex flex-wrap items-center justify-center md:grid md:grid-cols-3 gap-2 px-10 text-slate-950 font-[500] mb-5'>
            <p className=' text-start w-full md:w-auto col-span-1
            '>Direccion:</p>
            <input ref={inpAddress} className='w-full col-span-2 h-auto rounded-sm p-1 px-3 outline-none bg-slate-100 bg-opacity-60' type="text" name="address" id="address" />
          </label>
          <label className='flex flex-wrap items-center justify-center md:grid md:grid-cols-3 gap-2 px-10 text-slate-950 font-[500]'>
            <p className=' text-start w-full md:w-auto col-span-1
            '>Barrio / Ciudad:</p>
            <input ref={inpCity} className='w-full col-span-2 h-auto rounded-sm p-1 px-3 outline-none bg-slate-100 bg-opacity-60' type="text" name="city" id="city" />
          </label>
          <div className='flex w-full justify-center items-center gap-20 pt-10'>
            <input onClick={() => setConfirmClient(!confirmClient)} className='bg-lime-700 active:bg-lime-600 w-[100px] cursor-pointer py-1.5 rounded-md font-[800]' type="button" value="Crear" />
            <input onClick={action} className='bg-red-800 active:bg-red-700 w-[100px] cursor-pointer py-1.5 rounded-md font-[800]' type="button" value="Cancelar" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddClient