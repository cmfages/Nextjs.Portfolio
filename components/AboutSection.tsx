'use client'
import React from 'react'
import Image from 'next/image'
import { HiArrowDown } from 'react-icons/hi'
import { Link } from 'react-scroll/modules'
import { useState } from 'react'

const skills = [
  { skill: 'HTML', color: 'border-orange-500' },
  { skill: 'CSS', color: 'border-blue-700' },
  { skill: 'JavaScript', color: 'border-yellow-400' },
  { skill: 'TypeScript', color: 'border-cyan-600' },
  { skill: 'React', color: 'border-cyan-400' },
  { skill: 'Next.js', color: 'border-stone-950' },
  { skill: 'Tailwind CSS', color: 'border-sky-400' },
  { skill: 'Git', color: 'border-orange-600' },
  { skill: 'GitHub', color: 'border-zinc-300' },
  { skill: 'Node.js', color: 'border-lime-500' },
  { skill: 'MongoDB', color: 'border-green-700' }
]

const AboutSection = () => {
  return (
    <section id="info">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Info
          <hr className="w-6 h-1 mx-auto my-4 bg-orange-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top mb-2 md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Me presento
            </h1>
            <p>
              Hola, mi nombre es Christian y me encuentro{" "}
              <span className='font-bold'>{'ancioso'}</span> y
              <span className='font-bold'>{' motivado'}</span> de seguir creciendo como
              <span className='font-semibold text-orange-500'> Desarrollador Frontend</span>.
            </p>
            <br />
            <p>
              Aprendí las bases del desarrollo cursando el bootcamp en
              <span className='font-bold'>{' MindHub'}</span> y, desde allí, continue mi camino
              aprendiendo las tecnologías necesarias para poder continuar creciendo como Desarrollador.
            </p>
            <br />
            <p>
              Siempre me interesó el mundo de la tecnología lo cual aportó a que
              quisiera dedicarme a esto. Continuamente consumo contenido multimedia
              desde nuevas tecnologías móviles hasta prácticas y novedades del rubro.
            </p>
            <hr className='w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0' />
            <p className='mb-2'>
              <span className='font-bold'>{"Otras cosas que quizas quieras saber"}: </span>
              <br />
              Por otra parte, respecto a mis habilidades listadas a continuación,
              me encuentro encaminado a aprender sobre tecnologías mobile como
              así también en tecnologías de la <span className='font-bold'>Web3</span>, ya que me encuentro aprendiendo
              <span className='font-bold'> Solidity</span>.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Mis Habilidades</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className={`bg-slate-200 border-solid border-2 ${item.color} px-4 py-2 mr-2 mt-2 text-slate-800 rounded font-semibold cursor-default`}
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hard-work.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-30 md:z-0"
            />
          </div>
        </div>
        <div className='flex flex-row justify-center'>
          <Link
            to='proyectos'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <button><HiArrowDown size={35} className='animate-bounce' /></button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
