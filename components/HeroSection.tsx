'use client'
import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll/modules'
import { HiArrowDown } from 'react-icons/hi'

const HeroSection = () => {
  return (
    <section id='inicio'>
      <div className='flex flex-col text-center items-center justify-center py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52'>
        <div className='md:w-1/2 '>
          <Image className='rounded-2xl shadow-2xl' src='/me.jpg' alt='Profile Image' width={300} height={300} />
        </div>
        <div className='md:mt-2 md:w-3/5'>
          <h1 className='font-bold text-4xl mt-6 md:text-7xl md:mt-0'>Hola, soy Christian</h1>
          <p className='text-lg mt-4 mb-6 md:text-2xl'>
            Soy{" "}
            <span className='font-semibold text-orange-500'>
              Desarrollador{" "}
            </span>
            <span>
              desde Corrientes, Argentina, ¡en busqueda de nuevos retos!
            </span>
          </p>
          <Link
            to='proyectos'
            className='text-neutral-100 font-semibold px-6 py-3 bg-orange-500 rounded shadow hover:bg-orange-600'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <button>Proyectos</button>
          </Link>
        </div>
      </div>
      <div className='flex flex-row justify-center'>
        <Link
          to='info'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <button><HiArrowDown size={35} className='animate-bounce' /></button>
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
