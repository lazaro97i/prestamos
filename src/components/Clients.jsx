import React, { useState, useEffect } from 'react'
import Nav from '../layouts/Nav'
import TableClients from '../components/TableClients'
import AddClient from './addClient'

const Clients = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='w-screen h-screen'>
      <section className=' bg-slate-950 px-8 py-4 flex justify-stasrt items-center w-full gap-4'>
        <img onClick={handleNav} className='w-10 rounded-sm cursor-pointer' src="./icons/menu.svg" alt="menu" />
        <h1 className='text-slate-300 self-center text-center w-full font-[500] text-3xl'>Prestamos</h1>
      </section>
      {
        nav ?
          <Nav
            click={handleNav}
          />
          :
          null
      }
      <div className='mt-20 px-1 md:px-3'>
        <p className='font-[500] text-2xl text-slate-950'>Clientes</p>
        <AddClient />
        <TableClients />
      </div>
    </div>
  )
}

export default Clients