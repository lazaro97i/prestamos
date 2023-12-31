import React, { useEffect, useRef, useState } from 'react'
import clientActions from '../store/client/actions'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import ClientData from './ClientData'

const { createClient } = clientActions

const ClientForm = ({ add }) => {

  const [confirmClient, setConfirmClient] = useState(false)
  const clientStore = useSelector((store) => store.client)
  const dispatch = useDispatch()

  const inpName = useRef('')
  const inpDni = useRef('')
  const inpPhone = useRef('')
  const inpAddress = useRef('')
  const inpCity = useRef('')

  const successAlert = () => {
    toast.success('Cliente agregado correctamente 👍')
  }
  const errorAlert = () => {
    clientStore?.message?.message?.map((e) => {
      toast.error(e.message)
    })
  }

  const data = {
    name: inpName.current.value,
    dni: inpDni.current.value,
    phone: inpPhone.current.value,
    address: inpAddress.current.value,
    city: inpCity.current.value,
  }

  const addClient = async () => {

    dispatch(
      createClient({
        data,
        add,
        handleConfirm
      })
    )

  }
  const handleConfirm = () => {
    setConfirmClient(!confirmClient)
  }

  useEffect(() => {
    if (clientStore?.client) {
      successAlert()
    } else {
      errorAlert()
    }
  }, [clientStore])

  return (
    <div className='fixed top-0 left-0 w-screen h-screen px-1 py-10 flex flex-col justify-center items-center bg-slate-950 bg-opacity-90'>
      {confirmClient ?
        <ClientData
          data={data}
          add={addClient}
          cancel={handleConfirm}
        />
        :
        null
      }
      <div className=' w-full max-h-screen overflow-auto scroll rounded-md md:w-4/5 bg-slate-300 flex flex-col py-10'>
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
          <label className='flex flex-wrap items-center justify-center md:grid md:grid-cols-3 gap-2 px-10 text-slate-950 font-[500] mb-5'>
            <p className=' text-start w-full md:w-auto col-span-1
            '>Barrio / Ciudad:</p>
            <input ref={inpCity} className='w-full col-span-2 h-auto rounded-sm p-1 px-3 outline-none bg-slate-100 bg-opacity-60' type="text" name="city" id="city" />
          </label>
          <div className='flex w-full justify-center items-center gap-20 pt-10'>
            <input onClick={() => setConfirmClient(!confirmClient)} className='bg-lime-700 active:bg-lime-600 w-[100px] cursor-pointer py-1.5 rounded-md font-[800]' type="button" value="Crear" />
            <input onClick={add} className='bg-red-800 active:bg-red-700 w-[100px] cursor-pointer py-1.5 rounded-md font-[800]' type="button" value="Cancelar" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ClientForm