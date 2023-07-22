import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import clientActions from '../store/client/actions'
import lendingActions from '../store/lending/actions'
import AddClient from './AddClient'
import toast from 'react-hot-toast'
import ClientData from './ClientData'

const { getClients, deleteClient } = clientActions
const { getAllLendings } = lendingActions

const TableClients = () => {

  const clientStore = useSelector((store) => store.client)
  const lendingStore = useSelector((store) => store.lending)
  const dispatch = useDispatch()
  const [newClient, setNewClient] = useState(false)
  const [delClient, setDelClient] = useState(false)
  const [clientData, setClientData] = useState(false)
  const [idClient, setIdClient] = useState(null)
  const [filter, setFilter] = useState("")

  useEffect(() => {
    if (clientStore?.clients?.length === 0) {
      dispatch(getClients())
      dispatch(getAllLendings())
    }
  }, [clientStore?.client?.success])

  const createClient = () => {
    setNewClient(!newClient)
  }

  const btnDelete = async () => {
    try {
      const data = {
        id: idClient
      }
      setTimeout(() => {
        setDelClient(!delClient)
        clientData ? setClientData(!clientData) : null
        dispatch(getClients())
      }, 800)
      await toast.promise(
        dispatch(deleteClient(data)),
        {
          loading: 'Eliminando cliente ...',
          success: 'Cliente eliminado correctamente 👍',
          error: 'Error al eliminar cliente'
        }
      )
    } catch (e) {
      console.log(e)
    }
  }
  const handleDelete = (e) => {
    setDelClient(!delClient)
  }
  const btnEdit = (e) => {
    console.log(e);
  }
  const btnView = (e) => {
    setClientData(!clientData)
  }

  const currentClient = clientStore?.clients?.response?.find((e) => e._id === idClient)

  const ConfirmDelete = () => {

    return (
      <div className='fixed px-1 top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-slate-950 bg-opacity-90 z-10'>
        <div className='flex justify-center w-full max-w-[700px] rounded-md md:w-4/5 bg-slate-300 py-10'>
          <div className=' grid grid-cols-2 gap-3 items-center'>
            <p className='text-slate-950 font-[600] text-3xl pb-10 px-5 col-span-2'>Desea eliminar cliente ?</p>
            <p className='px-5 text-lime-700 col-span-2 font-[600] text-2xl pb-5'>{currentClient?.name}</p>
            <div className='flex w-full justify-center items-center gap-20 pt-10 col-span-2'>
              <input onClick={btnDelete} className='bg-lime-700 active:bg-lime-600 w-[100px] cursor-pointer py-1.5 rounded-md font-[800]' type="button" value="Confirmar" />
              <input onClick={() => setDelClient(!delClient)} className='bg-red-800 active:bg-red-700 w-[100px] cursor-pointer py-1.5 rounded-md font-[800]' type="button" value="Cancelar" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='mt-5 flex flex-col'>
      <label className='flex flex-col items-center justify-center gap-2 px-10 pb-5 text-slate-950 font-[500] mb-5'>
        <p className=' text-start w-full max-w-[500px]
            '>Buscar:</p>
        <input onInput={(e) => setFilter(e.target.value.toLowerCase())} className='w-full max-w-[500px] h-auto rounded-sm p-1 px-3 outline-none' type="search" name="search" id="search" />
      </label>
      <div className='flex justify-between items-center w-4/5 max-w-[800px] self-center pb-5'>
        <button onClick={() => setNewClient(!newClient)} className='bg-lime-800 active:bg-lime-700 w-[200px] h-[46px] rounded-md font-[600]'>Nuevo Cliente</button>
        <button onClick={() => dispatch(getClients())} className='bg-slate-800 active:bg-slate-700 p-2 rounded-md cursor-pointer'><svg className=' pointer-events-none' width={30} fill="#f3f4f6" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" stroke="#f3f4f6"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 12v-2l-4 3 4 3v-2h2.997A6.006 6.006 0 0 0 16 8h-2a4 4 0 0 1-3.996 4H7zM9 2H6.003A6.006 6.006 0 0 0 0 8h2a4 4 0 0 1 3.996-4H9v2l4-3-4-3v2z" fillRule="evenodd"></path> </g></svg></button>
      </div>
      {
        newClient ?
          <AddClient
            action={createClient}
          />
          :
          null
      }
      <table className='w-full self-center max-w-[1300px]'>
        <thead>
          <tr className='text-slate-950 bg-slate-400 bg-opacity-40 rounded-t-md grid grid-cols-3 md:grid-cols-5'>
            <th className='col-span-2'>Nombre</th>
            <th className='hidden md:inline'>Préstamos</th>
            <th className='hidden md:inline'>Celular</th>
            <th className='col-span-1'>Cliente</th>
          </tr>
        </thead>
        <tbody >
          {
            clientStore?.clients?.response?.filter(
              e => e.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(filter)
            ).map((client) => {
              return (
                <tr key={client._id} className='text-slate-950 font-[400] grid grid-cols-3 md:grid-cols-5 py-3 border-b border-slate-500 items-center'>
                  <td className='col-span-2'>{client.name}</td>
                  <td className='hidden md:inline'>{lendingStore?.allLendings?.lendings?.filter(e => e.client_id === client._id).length}</td>
                  <td className='hidden md:inline'>{client.phone}</td>
                  <td className='grid grid-cols-3 border-l border-slate-500'>
                    <td id={client._id} onClick={() => { setIdClient(client._id), setClientData(!clientData) }} className='flex justify-center items-center cursor-pointer'><svg className=' pointer-events-none' viewBox="0 0 24 24" fill="none" width='30px' xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M6.30147 15.5771C4.77832 14.2684 3.6904 12.7726 3.18002 12C3.6904 11.2274 4.77832 9.73158 6.30147 8.42294C7.87402 7.07185 9.81574 6 12 6C14.1843 6 16.1261 7.07185 17.6986 8.42294C19.2218 9.73158 20.3097 11.2274 20.8201 12C20.3097 12.7726 19.2218 14.2684 17.6986 15.5771C16.1261 16.9282 14.1843 18 12 18C9.81574 18 7.87402 16.9282 6.30147 15.5771ZM12 4C9.14754 4 6.75717 5.39462 4.99812 6.90595C3.23268 8.42276 2.00757 10.1376 1.46387 10.9698C1.05306 11.5985 1.05306 12.4015 1.46387 13.0302C2.00757 13.8624 3.23268 15.5772 4.99812 17.0941C6.75717 18.6054 9.14754 20 12 20C14.8525 20 17.2429 18.6054 19.002 17.0941C20.7674 15.5772 21.9925 13.8624 22.5362 13.0302C22.947 12.4015 22.947 11.5985 22.5362 10.9698C21.9925 10.1376 20.7674 8.42276 19.002 6.90595C17.2429 5.39462 14.8525 4 12 4ZM10 12C10 10.8954 10.8955 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8955 14 10 13.1046 10 12ZM12 8C9.7909 8 8.00004 9.79086 8.00004 12C8.00004 14.2091 9.7909 16 12 16C14.2092 16 16 14.2091 16 12C16 9.79086 14.2092 8 12 8Z" fill="#4d7c0f"></path> </g></svg></td>
                    {/* ---------------------------- */}
                    <td id={client._id} onClick={btnEdit} className='flex justify-center items-center cursor-pointer'><svg className=' pointer-events-none' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width='23px' fill="#ca8a04" stroke="#ca8a04"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="edit"> <g> <path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" fill="none" stroke="#ca8a04" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path> <polygon fill="none" points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" stroke="#ca8a04" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></polygon> </g> </g> </g> </g></svg></td>
                    {/* -------------------------------- */}
                    <td onClick={() => { setIdClient(client._id), setDelClient(!delClient) }} className='flex justify-center items-center cursor-pointer'><svg className=' pointer-events-none' viewBox="0 0 24 24" width='27px' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 11V17" stroke="#b91c1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M14 11V17" stroke="#b91c1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M4 7H20" stroke="#b91c1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#b91c1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#b91c1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg></td>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      {
        delClient ?
          <ConfirmDelete />
          :
          null
      }
      {
        clientData ?
          <ClientData
            data={currentClient}
            cancel={btnView}
            deleteClient={handleDelete}
          />
          :
          null
      }
    </div>
  )
}

export default TableClients