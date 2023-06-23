import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import clientActions from '../store/client/actions'

const { getClients } = clientActions

const TableClients = () => {

  const clientStore = useSelector((store) => store.client)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getClients())
  }, [])

  const btnDelete = (e) => {
    console.log(e);
  }
  const btnEdit = (e) => {
    console.log(e);
  }
  const btnView = (e) => {
    console.log(e);
  }

  return (
    <div className='mt-10'>
      <table className='w-full'>
        <thead>
          <tr className='text-slate-950 bg-slate-400 bg-opacity-40 rounded-t-md grid grid-cols-3 md:grid-cols-5'>
            <th className='col-span-2'>Nombre</th>
            <th className='hidden md:inline'>DNI</th>
            <th className='hidden md:inline'>Celular</th>
            <th className='col-span-1'>Cliente</th>
          </tr>
        </thead>
        <tbody>
          {
            clientStore?.clients?.response?.map((client) => {
              return (
                <tr key={client._id} className='text-slate-950 font-[400] grid grid-cols-3 md:grid-cols-5 py-3 border-b border-slate-500 items-center'>
                  <td className='col-span-2'>{client.name}</td>
                  <td className='hidden md:inline'>{client.dni}</td>
                  <td className='hidden md:inline'>{client.phone}</td>
                  <td className='grid grid-cols-3 border-l border-slate-500'>
                    <td id={client._id} onClick={btnView} className='flex justify-center items-center cursor-pointer'><svg className=' pointer-events-none' viewBox="0 0 24 24" fill="none" width='30px' xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M6.30147 15.5771C4.77832 14.2684 3.6904 12.7726 3.18002 12C3.6904 11.2274 4.77832 9.73158 6.30147 8.42294C7.87402 7.07185 9.81574 6 12 6C14.1843 6 16.1261 7.07185 17.6986 8.42294C19.2218 9.73158 20.3097 11.2274 20.8201 12C20.3097 12.7726 19.2218 14.2684 17.6986 15.5771C16.1261 16.9282 14.1843 18 12 18C9.81574 18 7.87402 16.9282 6.30147 15.5771ZM12 4C9.14754 4 6.75717 5.39462 4.99812 6.90595C3.23268 8.42276 2.00757 10.1376 1.46387 10.9698C1.05306 11.5985 1.05306 12.4015 1.46387 13.0302C2.00757 13.8624 3.23268 15.5772 4.99812 17.0941C6.75717 18.6054 9.14754 20 12 20C14.8525 20 17.2429 18.6054 19.002 17.0941C20.7674 15.5772 21.9925 13.8624 22.5362 13.0302C22.947 12.4015 22.947 11.5985 22.5362 10.9698C21.9925 10.1376 20.7674 8.42276 19.002 6.90595C17.2429 5.39462 14.8525 4 12 4ZM10 12C10 10.8954 10.8955 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8955 14 10 13.1046 10 12ZM12 8C9.7909 8 8.00004 9.79086 8.00004 12C8.00004 14.2091 9.7909 16 12 16C14.2092 16 16 14.2091 16 12C16 9.79086 14.2092 8 12 8Z" fill="#4d7c0f"></path> </g></svg></td>
                    {/* ---------------------------- */}
                    <td id={client._id} onClick={btnEdit} className='flex justify-center items-center cursor-pointer'><svg className=' pointer-events-none' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width='23px' fill="#ca8a04" stroke="#ca8a04"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="edit"> <g> <path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" fill="none" stroke="#ca8a04" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path> <polygon fill="none" points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" stroke="#ca8a04" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></polygon> </g> </g> </g> </g></svg></td>
                    {/* -------------------------------- */}
                    <td id={client._id} onClick={btnDelete} className='flex justify-center items-center cursor-pointer'><svg className=' pointer-events-none' viewBox="0 0 24 24" width='27px' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 11V17" stroke="#b91c1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M14 11V17" stroke="#b91c1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M4 7H20" stroke="#b91c1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#b91c1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#b91c1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg></td>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default TableClients