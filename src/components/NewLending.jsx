import React from 'react'

const NewLending = () => {
  return (
    <div className=' bg-slate-300 w-full'>
      <label className='flex flex-wrap items-center justify-center md:grid md:grid-cols-3 gap-2 px-10 text-slate-950 font-[500] mb-5'>
        <p className=' text-start w-full md:w-auto col-span-1
            '>Fecha de prestamo:</p>
        <input className='w-full col-span-2 h-auto rounded-sm p-1 px-3 outline-none bg-slate-100 bg-opacity-60' type="date" name="date" id="date" />
      </label>
      <label className='flex flex-wrap items-center justify-center md:grid md:grid-cols-3 gap-2 px-10 text-slate-950 font-[500] mb-5'>
        <p className=' text-start w-full md:w-auto col-span-1
            '>Monto:</p>
        <input className='w-full col-span-2 h-auto rounded-sm p-1 px-3 outline-none bg-slate-100 bg-opacity-60' type="number" name="amount" id="amount" placeholder='$' />
      </label>
      <label className='grid grid-cols-2 items-center md:grid md:grid-cols-3 gap-4 px-10 text-slate-950 font-[500] mb-5'>
        <p className=' col-span-2 md:col-span-1 text-start w-full md:w-auto
            '>Tipo de pago:</p>
        <label>
          <input className='peer hidden' type="radio" value={7} name='payment' id='payment1' />
          <p className='peer-checked:bg-lime-700 peer-checked:text-slate-300 font-[600] cursor-pointer bg-slate-400 py-3 rounded-md'>Semanal</p>
        </label>
        <label>
          <input className='peer hidden' type="radio" value={30} name='payment' id='payment2' />
          <p className='peer-checked:bg-lime-700 peer-checked:text-slate-300 font-[600] cursor-pointer bg-slate-400 py-3 rounded-md'>Mensual</p>
        </label>
      </label>
      <label className='flex flex-wrap items-center justify-center md:grid md:grid-cols-3 gap-2 px-10 text-slate-950 font-[500] mb-5'>
        <p className=' text-start w-full md:w-auto col-span-1
            '>Cuotas:</p>
        <input className='w-full col-span-2 h-auto rounded-sm p-1 px-3 outline-none bg-slate-100 bg-opacity-60' type="number" name="dues" id="dues" />
      </label>
    </div>
  )
}

export default NewLending