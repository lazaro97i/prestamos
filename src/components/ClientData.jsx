import React from 'react'

const ClientData = ({ data, add, cancel, deleteClient }) => {

  return (
    <div className='fixed px-1 top-0 left-0 w-full flex flex-col justify-center items-center bg-slate-950 bg-opacity-90 py-10 h-screen'>
      <div className='relative flex justify-center w-full max-w-[700px] max-h-screen overflow-auto rounded-md md:w-4/5 bg-slate-300 py-10'>
        <div className=' grid grid-cols-2 gap-3 items-center w-max-[600px]'>
          <p className='text-slate-950 font-[600] text-3xl pb-5 px-5 col-span-2'>{add ? 'Desea confirmar cliente ?' : 'Datos del cliente'}</p>
          <p className='px-5 text-lime-700 col-span-2 font-[600] text-2xl pb-5'>{data ? data.name : null}</p>
          <span className='font-[700] text-end col-span-1 text-slate-950 pr-3'>Documento:</span><p className=' text-slate-950 text-start font-[500] col-span-1 pl-3'>{data ? data.dni : null}</p>
          <span className='font-[700] text-end col-span-1 text-slate-950 pr-3'>Telefono:</span><p className=' text-slate-950 text-start font-[500] col-span-1 pl-3'>{data ? data.phone : null}</p>
          <span className='font-[700] text-end col-span-1 text-slate-950 pr-3'>Direccion:</span> <p className=' text-slate-950 text-start font-[500] col-span-1 pl-3'>{data ? data.address : null}</p>
          <span className='font-[700] text-end col-span-1 text-slate-950 pr-3'>Barrio / Ciudad:</span><p className=' text-slate-950 text-start font-[500] col-span-1 pl-3'>{data ? data.city : null}</p>
          <span className='font-[700] text-end col-span-1 text-slate-950 pr-3'>Préstamos:</span><p className=' text-slate-950 text-start font-[500] col-span-1 pl-3'>3</p>
          <div className=' col-span-2'>
            <input className=' bg-slate-900 active:bg-slate-700 cursor-pointer py-1.5 rounded-md font-[800] self-center px-3' type="button" value="Ver préstamos" />
          </div>
          {/* <span className='font-[700] text-end col-span-1 text-slate-950 pr-3'>Monto:</span><p className=' text-slate-950 text-start font-[500] col-span-1 pl-3'>$ {data ? data.amount : null}</p>
          <span className='font-[700] text-end col-span-1 text-slate-950 pr-3'>Pago:</span><p className=' text-slate-950 text-start font-[500] col-span-1 pl-3'>{pago}</p>
          <span className='font-[700] text-end col-span-1 text-slate-950 pr-3'>Cuotas:</span><p className=' text-slate-950 text-start font-[500] col-span-1 pl-3'>{data ? data.dues : null}</p> */}
          <div className='flex w-full flex-wrap justify-center items-center gap-10 px-5 pt-8 col-span-2'>
            {
              add ?
                <>
                  <input onClick={add} className='bg-lime-700 active:bg-lime-600 w-[100px] cursor-pointer py-1.5 rounded-md font-[800]' type="button" value="Confirmar" />
                  <input onClick={cancel} className='bg-red-800 active:bg-red-700 w-[100px] cursor-pointer py-1.5 rounded-md font-[800]' type="button" value="Cancelar" />
                </>
                :
                <>
                  <div className='flex w-full justify-around'>
                    <input className='bg-lime-700 active:bg-lime-600 w-[150px] cursor-pointer py-1.5 rounded-md font-[800]' type="button" value="Nuevo Préstamo" />
                    <input onClick={cancel} className='bg-slate-700 py-1.5 active:bg-slate-400 active:text-slate-950 w-[150px] cursor-pointer rounded-md font-[800]' type="button" value="Atrás" />
                  </div>
                  <div className='flex w-full justify-center gap-10 py-5'>
                    <input className='bg-yellow-600 active:bg-yellow-500 w-[100px] cursor-pointer py-1.5 rounded-md font-[800]' type="button" value="Editar" />
                    <input onClick={deleteClient} className='bg-red-800 active:bg-red-700 w-[100px] cursor-pointer py-1.5 rounded-md font-[800]' type="button" value="Eliminar" />
                  </div>
                </>
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientData