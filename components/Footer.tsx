import React from 'react'
import { AiOutlineGithub, AiOutlineLink, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
      <hr className='w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0' />
      <div className='mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between'>
        <div className='mb-2 text-neutral-500 dark:text-neutral-100'>© Fages Christian 2023</div>
        <div className='flex flex-row items-center justify-center space-x-2 mb-1'>
          <a
            href='https://www.linkedin.com/in/christian-fages-it/'
            rel='noreferrer'
            target='_blank'>
            <AiOutlineLinkedin
              className='hover:-translate-y-1 transition-transform cursor-pointer text-sky-600 dark:text-sky-300'
              size={30}
            />
          </a>
          <a
            href='https://github.com/cmfages'
            rel='noreferrer'
            target='_blank'>
            <AiOutlineGithub
              className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-950 dark:text-neutral-100'
              size={30}
            />
          </a>
          <a
            href='mailto:cmfages.it@gmail.com'
            rel='noreferrer'
            target='_blank'>
            <AiOutlineMail
              className='hover:-translate-y-1 transition-transform cursor-pointer text-orange-500 dark:text-orange-400'
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer