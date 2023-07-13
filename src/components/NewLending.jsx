import React, { useRef, useState } from 'react'
import ClientData from './ClientData'
import lendigActions from '../store/lending/actions.js'
import { useDispatch } from 'react-redux'

const { createLending } = lendigActions

const NewLending = ({ id, modalLending }) => {

  const [payment, setPayment] = useState('')
  const [confirm, setConfirm] = useState(false)
  const dispatch = useDispatch()

  const inpDate = useRef('')
  const inpAmount = useRef('')
  const inpDues = useRef('')

  let data = {
    date: inpDate.current.value,
    amount: inpAmount.current.value,
    typeOfPay: payment,
    dues: inpDues.current.value,
    client_id: id
  }

  
  const addLending = () => {
    dispatch(createLending({
      data,
      modalConfirm,
      modalLending
    }))
  }
  const modalConfirm = ()=> {
    setConfirm(!confirm)
  }

  const DataLendign = ({ setConfirm, data }) => {

    return (
      <>
        <div className='fixed px-1 top-0 left-0 w-full flex flex-col justify-center items-center bg-slate-950 bg-opacity-90 py-10 h-screen z-20'>
          <div className='relative flex flex-col justify-center w-full max-w-[700px] max-h-screen overflow-auto rounded-md md:w-4/5 bg-slate-300 py-10'>
            <p className='text-slate-950 font-[600] text-3xl pb-10 px-5'>Datos del préstamo</p>
            <div className=' grid grid-cols-2 gap-3 items-center w-max-[600px]'>
              <span className='font-[700] text-end col-span-1 text-slate-950 pr-3'>Fecha:</span><p className=' text-slate-950 text-start font-[500] col-span-1 pl-3'>{data ? data.date : null}</p>
              <span className='font-[700] text-end col-span-1 text-slate-950 pr-3'>Monto:</span><p className=' text-slate-950 text-start font-[500] col-span-1 pl-3'>$ {data ? data.amount : null}</p>
              <span className='font-[700] text-end col-span-1 text-slate-950 pr-3'>Tipo de pago:</span>
              <p className=' text-slate-950 text-start font-[500] col-span-1 pl-3'>
                {data.typeOfPayment === '7' ? 'Semanal' : 'Mensual'}
              </p>
              <span className='font-[700] text-end col-span-1 text-slate-950 pr-3'>Cuotas:</span><p className=' text-slate-950 text-start font-[500] col-span-1 pl-3'>{data ? data.dues : null}</p>
            </div>
              <div className='flex w-full justify-center items-center gap-20 pt-10'>
                <input onClick={addLending} className='bg-lime-700 active:bg-lime-600 w-[100px] cursor-pointer py-1.5 rounded-md font-[800]' type="button" value="Confirmar" />
                <input onClick={setConfirm} className='bg-red-800 active:bg-red-700 w-[100px] cursor-pointer py-1.5 rounded-md font-[800]' type="button" value="Cancelar" />
              </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {
        confirm ?
          <DataLendign
            data={data}
            setConfirm={() => { setConfirm(!confirm) }}
          />
          :
          null
      }
      <div className='fixed px-1 top-0 left-0 w-full flex flex-col justify-center items-center bg-slate-950 bg-opacity-90 py-10 h-screen z-10'>
        <div className='relative flex flex-col justify-center w-full max-w-[700px] max-h-screen overflow-auto rounded-md md:w-4/5 bg-slate-300 py-10'>
          <p className='text-slate-950 font-[600] text-3xl pb-10 px-5'>Nuevo Préstamo</p>
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
              <input onClick={(e) => { setPayment(e.target.value) }} className='peer hidden' type="radio" value={7} name='payment' id='payment1' />
              <p className='peer-checked:bg-lime-700 peer-checked:text-slate-300 font-[600] cursor-pointer bg-slate-400 py-3 rounded-md'>Semanal</p>
            </label>
            <label>
              <input onClick={(e) => { setPayment(e.target.value) }} className='peer hidden' type="radio" value={30} name='payment' id='payment2' />
              <p className='peer-checked:bg-lime-700 peer-checked:text-slate-300 font-[600] cursor-pointer bg-slate-400 py-3 rounded-md'>Mensual</p>
            </label>
          </label>
          <label className='flex flex-wrap items-center justify-center md:grid md:grid-cols-3 gap-2 px-10 text-slate-950 font-[500] mb-5'>
            <p className=' text-start w-full md:w-auto col-span-1
            '>Cuotas:</p>
            <input ref={inpDues} className='w-full col-span-2 h-auto rounded-sm p-1 px-3 outline-none bg-slate-100 bg-opacity-60' type="number" name="dues" id="dues" />
          </label>
          <div className='flex w-full justify-center items-center gap-20 pt-10'>
            <input onClick={() => { setConfirm(!confirm) }} className='bg-lime-700 active:bg-lime-600 w-[100px] cursor-pointer py-1.5 rounded-md font-[800]' type="button" value="Crear" />
            <input onClick={modalLending} className='bg-red-800 active:bg-red-700 w-[100px] cursor-pointer py-1.5 rounded-md font-[800]' type="button" value="Cancelar" />
          </div>
        </div>
      </div>
    </>
  )
}

export default NewLending