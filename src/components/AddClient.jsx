import React from 'react'

const AddClient = ({action}) => {
  return (
    <div className='fixed px-1 top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-slate-950 bg-opacity-50'>
      <div className=' w-full rounded-md md:w-4/5 bg-slate-300 flex flex-col py-10'>
        <p className='text-slate-950 font-[600] text-3xl pb-10'>Nuevo Cliente</p>
        <form action="get">
          <label className='flex flex-wrap items-center justify-center md:grid md:grid-cols-3 gap-2 px-10 text-slate-950 font-[500] mb-5'>
            <p className=' text-start w-full md:w-auto col-span-1
            '>Nombre y Apellido:</p>
            <input className='w-full col-span-2 h-auto rounded-sm p-1 px-3 outline-none bg-slate-100 bg-opacity-60' type="text" name="name" id="name" />
          </label>
          <label className='flex flex-wrap items-center justify-center md:grid md:grid-cols-3 gap-2 px-10 text-slate-950 font-[500] mb-5'>
            <p className=' text-start w-full md:w-auto col-span-1
            '>Documento:</p>
            <input className='w-full col-span-2 h-auto rounded-sm p-1 px-3 outline-none bg-slate-100 bg-opacity-60' type="number" name="dni" id="dni" />
          </label>
          <label className='flex flex-wrap items-center justify-center md:grid md:grid-cols-3 gap-2 px-10 text-slate-950 font-[500] mb-5'>
            <p className=' text-start w-full md:w-auto col-span-1
            '>Celular:</p>
            <input className='w-full col-span-2 h-auto rounded-sm p-1 px-3 outline-none bg-slate-100 bg-opacity-60' type="number" name="phone" id="phone" />
          </label>
          <label className='flex flex-wrap items-center justify-center md:grid md:grid-cols-3 gap-2 px-10 text-slate-950 font-[500] mb-5'>
            <p className=' text-start w-full md:w-auto col-span-1
            '>Direccion:</p>
            <input className='w-full col-span-2 h-auto rounded-sm p-1 px-3 outline-none bg-slate-100 bg-opacity-60' type="text" name="address" id="address" />
          </label>
          <label className='flex flex-wrap items-center justify-center md:grid md:grid-cols-3 gap-2 px-10 text-slate-950 font-[500]'>
            <p className=' text-start w-full md:w-auto col-span-1
            '>Barrio / Ciudad:</p>
            <input className='w-full col-span-2 h-auto rounded-sm p-1 px-3 outline-none bg-slate-100 bg-opacity-60' type="text" name="city" id="city" />
          </label>
          <div className='flex w-full justify-center items-center gap-20 pt-10'>
            <input className='bg-lime-700 active:bg-lime-600 w-[100px] cursor-pointer py-1.5 rounded-md font-[800]' type="button" value="Crear" />
            <input onClick={action} className='bg-red-800 active:bg-red-700 w-[100px] cursor-pointer py-1.5 rounded-md font-[800]' type="button" value="Cancelar" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddClient