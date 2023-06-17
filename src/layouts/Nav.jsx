import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({click}) => {
  return (
    <div className='w-full h-screen grid grid-cols-1 md:grid-cols-3 fixed'>
      <nav className='flex flex-col bg-slate-950 items-start py-10 px-5 gap-3 col-span-3 md:col-span-1 font-[500] relative'>
        <img onClick={click} className='w-[40px] self-end absolute top-3 cursor-pointer' src="./icons/cancel.svg" alt="" />
        <p className='w-auto h-[30px] hover:border-slate-300 hover:border-b-2 text-start'>Clientes</p>
        <p className='w-auto h-[30px] hover:border-slate-300 hover:border-b-2 text-start'>Nuevo Prestamo</p>
        <p className='w-auto h-[30px] hover:border-slate-300 hover:border-b-2 text-start'>Cancelar Prestamo</p>
      </nav>
      <div onClick={click} className=' bg-slate-900 bg-opacity-70 h-0 md:col-span-2 md:visible md:h-screen'>
      </div>
    </div>
  )
}

export default Nav