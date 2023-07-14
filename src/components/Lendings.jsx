import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router'
import clientActions from '../store/client/actions'
import lendingActions from '../store/lending/actions'
import { Link } from 'react-router-dom'

const { getClients } = clientActions
const { getAllLendings } = lendingActions

const Lendings = () => {

  const lendingStore = useSelector((store) => store.lending)
  const clientStore = useSelector((store) => store.client)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  if (lendingStore?.allLendings?.lendings?.length === 0
    || clientStore?.clients?.length === 0) {
    dispatch(getClients())
    dispatch(getAllLendings())
  }

  const query = new URLSearchParams(useLocation().search).get('id')
  const currentClient = clientStore?.clients?.response?.filter(e => e._id === query)
  const currentLending = lendingStore?.allLendings?.lendings?.filter(e => e.client_id === query)

  return (
    <div className='relative w-screen h-auto mt-28 px-1 md:px-3 flex flex-col items-center'>
      <div className='relative w-full flex justify-center items-center mb-5 h-[40px] max-w-[840px]'>
        {
          query ?
            <div onClick={()=>navigate(-1)} className='w-[40px] absolute left-5'>
              <svg fill="#0f172a" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z"></path></g></svg>
            </div>
            :
            null
        }
        <p className='font-[500] text-2xl text-slate-950'>Prestamos</p>
      </div>
      {
        currentClient?.length ? <p className='px-5 text-lime-700 col-span-2 font-[600] text-2xl pb-12'>{currentClient[0]?.name}</p> : <p className='absolute'></p>
      }
      {
        query ?
          <table className='w-full self-center max-w-[900px]'>
            <thead>
              <tr className='text-slate-950 bg-slate-400 bg-opacity-40 rounded-t-md grid grid-cols-2 md:grid-cols-4'>
                <th className='col-span-1'>Fecha</th>
                <th className='col-span-1'>Monto</th>
                <th className='hidden md:inline'>Prox. pago</th>
                <th className='hidden md:inline'>Pagos</th>
              </tr>
            </thead>
            <tbody>
              {
                query ?
                  currentLending?.map((lend) => {
                    return (
                      <tr key={lend._id} className='text-slate-950 font-[400] grid grid-cols-2 md:grid-cols-4 py-3 border-b border-slate-500 items-center'>
                        <td>
                          {lend.date}
                        </td>
                        <td>
                          $ {lend.amount}
                        </td>
                      </tr>
                    )
                  })
                  :
                  null
              }
            </tbody>
          </table>
          :
          <div className='w-full h-auto flex flex-col'>
            <p className='font-[500] text-2xl text-slate-950 mb-10'>Seleccionar cliente: </p>
            <table className='w-full self-center max-w-[410px]'>
              <thead>
                <tr className='text-slate-950 bg-slate-400 bg-opacity-40 rounded-t-md'>
                  <th className='col-span-1 text-start pl-10 rounded-t-md'>Nombre</th>
                </tr>
              </thead>
              <tbody>
                {
                  clientStore?.clients?.response?.length ?
                    clientStore?.clients?.response?.map((client) => {
                      return (
                        <tr key={client._id} className='text-slate-950 font-[400] py-3 border-b border-slate-500 justify-center'>
                          <td className='text-start pl-6 active:bg-slate-600 active:text-slate-300 py-2 md:hover:bg-slate-600 md:hover:text-slate-300'>
                            <Link to={`?id=${client._id}`} className='flex'>
                              {client.name}
                            </Link>
                          </td>
                        </tr>
                      )
                    })
                    :
                    null
                }
              </tbody>
            </table>
          </div>
      }
    </div>
  )
}

export default Lendings