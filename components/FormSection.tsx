'use client'
import React from 'react'
import Image from 'next/image'
import { db } from 'firebaseConfig'
import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { v4 as uuid } from 'uuid'
import { Link } from 'react-scroll'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


const FormSection = () => {
  const uniqueId = uuid();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fde68a',
    border: '2px solid #fbbf24',
    borderRadius: '5px',
    boxShadow: 24,
    p: 4,
  };

  const userCollectionRef = collection(db, "contact")

  const handleSubmit = (event: any) => {
    event.preventDefault()
    handleOpen()
    console.log(name)
    console.log(email)
    addDoc(userCollectionRef, {
      id: uniqueId,
      name: name,
      email: email,
      comment: comment
    }).then(() => {

    })
  }

  return (
    <section id='contacto'>
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Contacto
          <hr className="w-6 h-1 mx-auto my-4 bg-orange-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top mb-2 md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 flex flex-col">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              ¡Si desea puede enviarme su información y me pondré en contacto con usted!
            </h1>
            <div className='flex align-center justify-center'>
              <Image
                src="/postbox.png"
                alt=""
                width={250}
                height={250}
                className="hidden md:block md:relative md:bottom-4 md:right-30 md:z-0"
              />
            </div>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <form
              className='flex flex-col'
            >
              <input
                className='m-2 p-2 rounded shadow'
                required
                placeholder="Nombre*"
                type={"text"}
                minLength={3}
                maxLength={30}
                onChange={(event) => {
                  setName(event.target.value)
                  console.log(name)
                }
                }
              />
              <input
                className='m-2 p-2 rounded shadow'
                required
                placeholder="Email*"
                type={"email"}
                onChange={(event) => {
                  setEmail(event.target.value)
                }
                }
              />
              <textarea
                className='m-2 p-2 rounded shadow'
                required
                placeholder="Comentarios*"
                rows={5}
                onChange={(event) => {
                  setComment(event.target.value)
                  console.log(comment)
                }
                }
              ></textarea>
              <button
                className='text-neutral-100 font-semibold px-6 py-3 bg-orange-500 rounded shadow hover:bg-orange-600'
                type="submit"
                onClick={handleSubmit}
              >
                Enviar
              </button>
            </form>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              className='flex flex-col justify-center items-center'
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  ¡Formulario completado!
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Muchas gracias por su tiempo.
                </Typography>
                <button
                  className='flex justify-center text-neutral-100 font-semibold px-6 py-3 mt-4 bg-orange-500 rounded shadow hover:bg-orange-600'
                  onClick={handleClose}
                >
                  Entendido
                </button>
              </Box>
            </Modal>

          </div>
        </div>
      </div>
    </section>
  )
}

export default FormSection