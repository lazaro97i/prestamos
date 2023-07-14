import TableClients from '../components/TableClients'
import { Toaster } from 'react-hot-toast'

const Clients = () => {

  return (
    <div className='w-screen h-auto'>
      <Toaster 
      toastOptions={{
        duration: 5000
      }}
      />
      <div className='mt-28 px-1 md:px-3 flex flex-col'>
        <p className='font-[500] text-2xl text-slate-950'>Clientes</p>
        <TableClients />
      </div>
    </div>
  )
}

export default Clients