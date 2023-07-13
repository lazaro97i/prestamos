import React, { useRef, useState } from 'react'
import ClientData from './ClientData'
import lendigActions from '../store/lending/actions.js'
import { useDispatch } from 'react-redux'

const { createLending } = lendigActions

const NewLending = ({ data }) => {

  const [payment, setPayment] = useState('')
  const dispatch = useDispatch()

  const inpDate = useRef('')
  const inpAmount = useRef('')
  const inpDues = useRef('')

  let dataLend = {
    date: inpDate.current.value,
    amount: inpAmount.current.value,
    dues: inpDues.current.value
  }

  const addClientWithLending = () => {
    dataLend.typeOfPayment = payment
    data.lendings[0] = dataLend
    console.log(data)
    // addClient(data)
  }

  const confirmClient = () => {
    setConfirm(!confirm)
  }

  return (
    <>
      <div className=' bg-slate-300 w-full'>
        <label className='flex flex-wrap items-center justify-center md:grid md:grid-cols-3 gap-2 px-10 text-slate-950 font-[500] mb-5'>
          <p className=' text-start w-full md:w-auto col-span-1
            '>Fecha de prestamo:</p>
          <input ref={inpDate} className='w-full col-span-2 h-auto rounded-sm p-1 px-3 outline-none bg-slate-100 bg-opacity-60' type="date" name="date" id="date" />
        </label>
        <label className='flex flex-wrap items-center justify-center md:grid md:grid-cols-3 gap-2 px-10 text-slate-950 font-[500] mb-5'>
          <p className=' text-start w-full md:w-auto col-span-1
            '>Monto:</p>
          <input ref={inpAmount} className='w-full col-span-2 h-auto rounded-sm p-1 px-3 outline-none bg-slate-100 bg-opacity-60' type="number" name="amount" id="amount" placeholder='$' />
        </label>
        <label className='grid grid-cols-2 items-center md:grid md:grid-cols-3 gap-4 px-10 text-slate-950 font-[500] mb-5'>
          <p className=' col-span-2 md:col-span-1 text-start w-full md:w-auto
            '>Tipo de pago:</p>
          <label>
            <input onClick={(e) => {setPayment(e.target.value)}} className='peer hidden' type="radio" value={7} name='payment' id='payment1' />
            <p className='peer-checked:bg-lime-700 peer-checked:text-slate-300 font-[600] cursor-pointer bg-slate-400 py-3 rounded-md'>Semanal</p>
          </label>
          <label>
            <input onClick={(e) => {setPayment(e.target.value)}} className='peer hidden' type="radio" value={30} name='payment' id='payment2' />
            <p className='peer-checked:bg-lime-700 peer-checked:text-slate-300 font-[600] cursor-pointer bg-slate-400 py-3 rounded-md'>Mensual</p>
          </label>
        </label>
        <label className='flex flex-wrap items-center justify-center md:grid md:grid-cols-3 gap-2 px-10 text-slate-950 font-[500] mb-5'>
          <p className=' text-start w-full md:w-auto col-span-1
            '>Cuotas:</p>
          <input ref={inpDues} className='w-full col-span-2 h-auto rounded-sm p-1 px-3 outline-none bg-slate-100 bg-opacity-60' type="number" name="dues" id="dues" />
        </label>
        <div className='flex w-full justify-center items-center gap-20 pt-10'>
          <input onClick={() => setConfirm(!confirm)} className='bg-lime-700 active:bg-lime-600 w-[100px] cursor-pointer py-1.5 rounded-md font-[800]' type="button" value="Crear" />
          <input className='bg-red-800 active:bg-red-700 w-[100px] cursor-pointer py-1.5 rounded-md font-[800]' type="button" value="Cancelar" />
        </div>
      </div>
    </>
  )
}

export default NewLending