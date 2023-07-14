import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

  const [nav, setNav] = useState(false)

  return (
    <>
      <section className='fixed top-0 bg-slate-950 px-8 py-4 flex justify-start items-center w-full gap-4'>
        <img onClick={() => setNav(!nav)} className='w-10 rounded-sm cursor-pointer' src="./icons/menu.svg" alt="menu" />
        <h1 className='text-slate-300 self-center text-center w-full font-[500] text-3xl'>Prestamos</h1>
      </section>
      {
        nav ?
          <div className='fixed top-[72px] w-full h-screen grid grid-cols-1 md:grid-cols-3'>
            <nav className='flex flex-col bg-slate-950 items-start py-10 px-5 gap-3 col-span-3 md:col-span-1 font-[500] relative'>
              <img onClick={() => setNav(!nav)} className='w-[40px] self-end absolute top-3 cursor-pointer' src="./icons/cancel.svg" alt="" />
              <Link onClick={() => setNav(!nav)} to={'/'} className='w-auto h-[30px] hover:border-slate-300 hover:border-b-2 text-start'>Clientes</Link>
              <Link onClick={() => setNav(!nav)} to={'/lendings'} className='w-auto h-[30px] hover:border-slate-300 hover:border-b-2 text-start'>Prestamos</Link>
              <p className='w-auto h-[30px] hover:border-slate-300 hover:border-b-2 text-start'>Cancelar Prestamo</p>
            </nav>
            <div onClick={() => setNav(!nav)} className=' bg-slate-900 bg-opacity-70 h-0 md:col-span-2 md:visible md:h-screen'>
            </div>
          </div>
          :
          null
      }
    </>

  )
}

export default Nav