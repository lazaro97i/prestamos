import React, { useEffect, useState } from 'react'
import NewLending from './NewLending'
import lendingActions from '../store/lending/actions'
import { useDispatch, useSelector } from 'react-redux'

const { getLendings } = lendingActions

const ClientData = ({ data, add, cancel, deleteClient }) => {

  const lendingStore = useSelector((store) => store.lending)
  const [lending, setLending] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLendings({client_id: data._id}))
  }, [lendingStore?.lendings?.lendings?.length])

  const handleLending = (e) =>{
    console.log(lendingStore)
  }

  return (
    <div className='fixed px-1 top-0 left-0 w-full flex flex-col justify-center items-center bg-slate-950 bg-opacity-90 py-10 h-screen'>
      {
        lending ?
          <NewLending
          id={data._id}
          modalLending={()=>setLending(!lending)}
          />
          :
          null
      }
      <div className='relative flex flex-col justify-center w-full max-w-[700px] max-h-screen overflow-auto rounded-md md:w-4/5 bg-slate-300 py-10'>
        <p className='text-slate-950 font-[600] text-3xl pb-5 px-5'>{add ? 'Desea confirmar cliente ?' : 'Datos del cliente'}</p>
        <div className='pb-6'>
          <p className='px-5 text-lime-700 col-span-2 font-[600] text-2xl pb-2'>{data ? data.name : null}</p>
          {
            add ?
              null
              :
              <div className='flex col-span-2 w-full justify-center gap-8'>
                <svg className=' pointer-events-none' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width='30px' fill="#ca8a04" stroke="#ca8a04"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="edit"> <g> <path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" fill="none" stroke="#ca8a04" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path> <polygon fill="none" points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" stroke="#ca8a04" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></polygon> </g> </g> </g> </g></svg>
                {/* ----------------------------------------------------------- */}
                <div onClick={deleteClient} >
                  <svg className=' pointer-events-none' viewBox="0 0 24 24" width='37px' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 11V17" stroke="#b91c1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M14 11V17" stroke="#b91c1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M4 7H20" stroke="#b91c1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#b91c1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#b91c1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </div>
              </div>
          }
        </div>
        <div className=' grid grid-cols-2 gap-3 items-center w-max-[600px]'>
          <span className='font-[700] text-end col-span-1 text-slate-950 pr-3'>Documento:</span><p className=' text-slate-950 text-start font-[500] col-span-1 pl-3'>{data ? data.dni : null}</p>
          <span className='font-[700] text-end col-span-1 text-slate-950 pr-3'>Telefono:</span><p className=' text-slate-950 text-start font-[500] col-span-1 pl-3'>{data ? data.phone : null}</p>
          <span className='font-[700] text-end col-span-1 text-slate-950 pr-3'>Direccion:</span> <p className=' text-slate-950 text-start font-[500] col-span-1 pl-3'>{data ? data.address : null}</p>
          <span className='font-[700] text-end col-span-1 text-slate-950 pr-3'>Barrio / Ciudad:</span><p className=' text-slate-950 text-start font-[500] col-span-1 pl-3'>{data ? data.city : null}</p>
          {/* <span className='font-[700] text-end col-span-1 text-slate-950 pr-3'>Monto:</span><p className=' text-slate-950 text-start font-[500] col-span-1 pl-3'>$ {data ? data.amount : null}</p>
          <span className='font-[700] text-end col-span-1 text-slate-950 pr-3'>Pago:</span><p className=' text-slate-950 text-start font-[500] col-span-1 pl-3'>{pago}</p>
          <span className='font-[700] text-end col-span-1 text-slate-950 pr-3'>Cuotas:</span><p className=' text-slate-950 text-start font-[500] col-span-1 pl-3'>{data ? data.dues : null}</p> */}
          {
            add ?
              null
              :
              <>
                <span className='font-[700] text-end col-span-1 text-slate-950 pr-3'>Préstamos:</span><p className=' text-slate-950 text-start font-[500] col-span-1 pl-3'>
                  {
                    lendingStore?.lendings?.lendings?.length ? 
                    lendingStore?.lendings?.lendings?.length
                    :
                    'No tiene préstamos activos'
                  }
                </p>
                <div className=' col-span-2 pt-2'>
                  <input onClick={handleLending} className='text-slate-950 border-b-2 border-slate-950 active:text-slate-600 text-xl cursor-pointer font-[500] self-center' type="button" value="Ver préstamos" />
                </div>
              </>
          }
          <div className='flex w-full flex-wrap justify-center items-center col-span-2'>
            {
              add ?
                <div className='flex gap-16 pt-8'>
                  <input onClick={add} className='bg-lime-700 active:bg-lime-600 w-[100px] cursor-pointer py-1.5 rounded-md font-[800]' type="button" value="Confirmar" />
                  <input onClick={cancel} className='bg-red-800 active:bg-red-700 w-[100px] cursor-pointer py-1.5 rounded-md font-[800]' type="button" value="Cancelar" />
                </div>
                :
                <>
                  <div className='flex w-full justify-center gap-10'>
                  </div>
                  <div className='flex gap-5 w-full justify-center items-center rounded-md pt-8'>
                    <input onClick={() => setLending(!lending)} className='bg-lime-700 active:bg-lime-600 cursor-pointer w-[150px] h-[45px] py-1.5 rounded-md font-[800]' type="button" value="Nuevo Prestamo" />
                    <input onClick={cancel} className='bg-slate-700 py-1.5 active:bg-slate-400 active:text-slate-950 w-[150px] h-[45px] cursor-pointer rounded-md font-[800]' type="button" value="Atrás" />
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