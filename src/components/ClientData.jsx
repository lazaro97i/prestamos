import React from 'react'

const ClientData = ({data, add, cancel}) => {

  return (
    <div className='absolute px-1 top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-slate-950 bg-opacity-90'>
      <div className='flex justify-center w-full max-w-[700px] rounded-md md:w-4/5 bg-slate-300 py-10'>
        <div className=' grid grid-cols-2 gap-3 items-center'>
          <p className='text-slate-950 font-[600] text-3xl pb-10 px-5 col-span-2'>Desea confirmar cliente ?</p>
          <p className='px-5 text-lime-700 col-span-2 font-[600] text-2xl pb-5'>{data.name}</p>
          <span className='font-[700] col-span-1 text-slate-950 pr-3'>Documento:</span><p className=' text-slate-950 font-[500] col-span-1'>{data.dni}</p>
          <span className='font-[700] col-span-1 text-slate-950 pr-3'>Telefono:</span><p className=' text-slate-950 font-[500] col-span-1'>{data.phone}</p>
          <span className='font-[700] col-span-1 text-slate-950 pr-3'>Direccion:</span> <p className=' text-slate-950 font-[500] col-span-1'>{data.address}</p>
          <span className='font-[700] col-span-1 text-slate-950 pr-3'>Barrio / Ciudad:</span><p className=' text-slate-950 font-[500] col-span-1'>{data.city}</p>
          <div className='flex w-full justify-center items-center gap-20 pt-10 col-span-2'>
            <input onClick={add} className='bg-lime-700 active:bg-lime-600 w-[100px] cursor-pointer py-1.5 rounded-md font-[800]' type="button" value="Confirmar" />
            <input onClick={cancel} className='bg-red-800 active:bg-red-700 w-[100px] cursor-pointer py-1.5 rounded-md font-[800]' type="button" value="Cancelar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientData