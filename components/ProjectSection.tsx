import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs'
import SlideUp from './SlideUp'


const projects = [
  {
    name: 'Calculadora',
    description: 'Calculadora funcional creada con React durante el aprendizaje del mismo.',
    image: '/calculator-preview.png',
    github: 'https://github.com/cmfages/ReactCalculator',
    link: 'https://cmfages.github.io/ReactCalculator/'
  },
  {
    name: 'Aplicación de notas',
    description: 'Aplicación a modo de práctica con conocimientos en React.',
    image: '/notes-preview.png',
    github: 'https://github.com/cmfages/ReactAppNotes',
    link: 'https://cmfages.github.io/ReactAppNotes/'
  },
  {
    name: 'Prototipo aplicación de recetas',
    description: 'Prototipo funcional de aplicación móvil de recetas culinarias orientado a personas con poco tiempo para cocinar y/o que desean mejorar su alimentación.',
    image: '/reasype-preview.png',
    github: 'https://github.com/cmfages/Ux-Ui-Design',
    link: 'https://www.figma.com/proto/Pg5M6rN2aDjQ9py5LHeBL4/Prototipo1?page-id=610%3A16485&node-id=610%3A16508&viewport=-268%2C1412%2C0.68&scaling=scale-down&starting-point-node-id=610%3A16498'
  },
  {
    name: 'Prueba técnica de formulario',
    description: 'Resolución de prueba técnica que consistía en crear un formulario cuya información se almacenara en una base de datos de FireBase y se mostrara dicha información.',
    image: '/react-router-testing.png',
    github: 'https://github.com/cmfages/challenge-gd-form',
    link: 'https://cmfages.github.io/challenge-gd-form/'
  },
  {
    name: 'Maqueta de sitio web',
    description: 'Maqueta realizada a modo de práctica de una web de agencia digital con cursos y proyectos y sus opiniones.',
    image: '/figma-practice-preview.png',
    github: 'https://github.com/cmfages/Figma-practice',
    link: 'https://www.figma.com/proto/4yzoK2pICe6hchaG1S17ri/Untitled?page-id=0%3A1&type=design&node-id=1-3&viewport=948%2C512%2C0.68&t=FpoaLl3RsVPDFVhu-1&scaling=min-zoom&mode=design'
  },
  {
    name: 'Resto web app',
    description: 'Diseño y desarrollo del lado visual para una app de un restaurant, desde un prototipo maquetado en Figma.',
    image: '/resto-web-preview.png',
    github: 'https://github.com/cmfages/resto-webapp',
    link: 'https://cmfages.github.io/resto-webapp/'
  }
]

const ProjectSection = () => {
  return (
    <section id='proyectos'>
      <h1 className="text-center font-bold text-4xl">
        Proyectos
        <hr className="w-6 h-1 mx-auto my-4 bg-orange-500 border-0 rounded"></hr>
      </h1>
      <div className='flex flex-col space-y-20 mb-8'>
        {
          projects.map((project, idx) => {
            return (
              <div key={idx}>
                <SlideUp offset='-300px 0px -300px 0px'>
                  <div className='flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
                    <div className='mt-8 md:w-1/2'>
                      <Link href={project.link} target='_blank'>
                        <Image
                          src={project.image}
                          alt={project.name}
                          width={500}
                          height={500}
                          className='rounded-xl shadow-xl hover:opacity-70'
                        />
                      </Link>
                    </div>
                    <div className='mt-12 md:w-1/2'>
                      <h1 className='text-4xl font-bold mb-6'>{project.name}</h1>
                      <p className='text-xl leading-7 mb-4 text-neutral-700 dark:text-neutral-300'>
                        {project.description}
                      </p>
                      <div className='flex flex-row align-bottom space-x-4'>
                        <Link href={project.github} target='_blank'>
                          <BsGithub
                            size={30}
                            className='hover:-translate-y-1 transition-transform cursor-pointer'
                          />
                        </Link>
                        <Link href={project.link} target='_blank'>
                          <BsArrowUpRightSquare
                            size={30}
                            className='hover:-translate-y-1 transition-transform cursor-pointer'
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SlideUp>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default ProjectSection
